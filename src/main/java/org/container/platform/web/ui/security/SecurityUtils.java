package org.container.platform.web.ui.security;

import lombok.RequiredArgsConstructor;
import org.container.platform.web.ui.security.model.OAuthTokens;
import org.container.platform.web.ui.security.model.PortalOAuth2User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Component;

/**
 * Security Utils 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
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
}
