package org.container.platform.web.ui.security;

import lombok.RequiredArgsConstructor;
import org.container.platform.web.ui.common.CommonUtils;
import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.container.platform.web.ui.security.model.OAuthTokens;
import org.container.platform.web.ui.security.model.PortalOAuth2User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class SecurityUtils {

    private final OAuth2AuthorizedClientService authorizedClientService;
    private static final Logger LOGGER = LoggerFactory.getLogger(SecurityUtils.class);

    public OAuthTokens getTokens() {
        OAuthTokens oAuthTokens = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            OAuth2AuthenticationToken oauth2Auth = (OAuth2AuthenticationToken) authentication;
            String registrationId = oauth2Auth.getAuthorizedClientRegistrationId();
            OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(registrationId, oauth2Auth.getName());

            if (authorizedClient != null) {
                PortalOAuth2User user = (PortalOAuth2User) oauth2Auth.getPrincipal();
                oAuthTokens = new OAuthTokens(authorizedClient.getAccessToken().getTokenValue(), authorizedClient.getRefreshToken().getTokenValue(),
                        user.getUsersLoginMetaData().getUserId(), user.getUsersLoginMetaData().getUserAuthId());
            }

        }
        return oAuthTokens;
    }

//    public void updateUserAuthorities(String updateUserType) {//삭제
//        SecurityContext context = SecurityContextHolder.getContext();
//        OAuth2AuthenticationToken currentAuth = (OAuth2AuthenticationToken) context.getAuthentication();
//        PortalOAuth2User currentUser = (PortalOAuth2User) currentAuth.getPrincipal();
//        UsersLoginMetaData currentMetaData = currentUser.getUsersLoginMetaData();
//
//        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(currentAuth.getAuthorizedClientRegistrationId(), currentAuth.getName());
//
//        authorizedClientService.removeAuthorizedClient(currentAuth.getAuthorizedClientRegistrationId(), currentAuth.getName());
//
//        // Update Authorities
//        List<GrantedAuthority> updatedAuthorities = new ArrayList<>();
//        updatedAuthorities.add(new SimpleGrantedAuthority(currentMetaData.getUserType()));
//        updatedAuthorities.add(new SimpleGrantedAuthority(updateUserType));
//
//        PortalOAuth2User newUser = new PortalOAuth2User(updatedAuthorities, currentUser.getAttributes(), "sub", currentMetaData);
//        OAuth2AuthenticationToken newAuth = new OAuth2AuthenticationToken(newUser, updatedAuthorities, currentAuth.getAuthorizedClientRegistrationId());
//
//        context.setAuthentication(newAuth);
//        authorizedClientService.saveAuthorizedClient(authorizedClient, newAuth);
//
//        LOGGER.info("OLD AUTHORITIES >> " + CommonUtils.loggerReplace(currentUser.getAuthorities()));
//        LOGGER.info("NEW AUTHORITIES >> " + CommonUtils.loggerReplace(newUser.getAuthorities()));
//    }


}
