package org.container.platform.web.ui.security;

import lombok.RequiredArgsConstructor;
import org.container.platform.web.ui.common.CommonUtils;
import org.container.platform.web.ui.common.Constants;
import org.container.platform.web.ui.common.PropertyService;
import org.container.platform.web.ui.common.model.ResultStatus;
import org.container.platform.web.ui.login.LoginService;
import org.container.platform.web.ui.login.ProviderService;
import org.container.platform.web.ui.login.model.AuthenticationResponse;
import org.container.platform.web.ui.login.model.Users;
import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.container.platform.web.ui.security.model.OAuthAttributes;
import org.container.platform.web.ui.security.model.PortalOAuth2User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PortalOAuth2UserService implements OAuth2UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PortalOAuth2UserService.class);

    @Autowired
    private ProviderService providerService;

    @Autowired
    private LoginService loginService;

    @Autowired
    private PropertyService propertyService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);
        OAuthAttributes attributes = new OAuthAttributes(oAuth2User.getAttributes());
        boolean isSuperAdmin = attributes.getRoles().contains(propertyService.getKeycloakSuperAdminRole()) ? true : false;

        // Creating a User Account
        Users users = new Users(attributes.getUsername(), attributes.getSub(), isSuperAdmin);
        LOGGER.info("###############################################################");
        LOGGER.info(CommonUtils.loggerReplace("[USERINFO] " + users.userIfo()));
        LOGGER.info("###############################################################");

        try {
            ResultStatus status = providerService.registerUsers(users);
            if (status.getResultCode().equals(Constants.RESULT_STATUS_FAIL)) {
                if (!Constants.ALREADY_REGISTERED_MESSAGE.contains(status.getResultMessage())) {
                    throw new Exception(status.getResultMessage());
                }
            }
        } catch (Exception e) {
            throw new OAuth2AuthenticationException(e.getMessage());
        }


        // Login User
        List<SimpleGrantedAuthority> roles = null;
        UsersLoginMetaData usersLoginMetaData = null;
        try {
            AuthenticationResponse response = providerService.loginUsers(users);
            if (response.getResultCode().equals(Constants.RESULT_STATUS_SUCCESS)) {
                LOGGER.info("###############################################################");
                LOGGER.info("[LOGIN] CP API LOGIN SUCCESSFUL ");
                LOGGER.info("###############################################################");
                usersLoginMetaData = loginService.setAuthDetailsLoginMetaData(response);
                roles = Arrays.asList(new SimpleGrantedAuthority(usersLoginMetaData.getUserType()));
            } else {
                if (response.getResultMessage().equals(Constants.LOGIN_INACTIVE_USER_MESSAGE)) {
                    usersLoginMetaData = loginService.setAuthDetailsLoginMetaData(response);
                    roles = Arrays.asList(new SimpleGrantedAuthority(Constants.AUTH_INACTIVE_USER));
                } else {
                    throw new Exception(response.getResultMessage());
                }

            }
        } catch (Exception e) {
            throw new OAuth2AuthenticationException(e.getMessage());
        }

        return new PortalOAuth2User(roles, attributes.getAttributes(), attributes.getNameAttributeKey(), usersLoginMetaData);
    }
}
