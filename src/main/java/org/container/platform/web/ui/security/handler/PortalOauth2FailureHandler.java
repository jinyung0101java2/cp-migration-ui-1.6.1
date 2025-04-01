package org.container.platform.web.ui.security.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.container.platform.web.ui.common.CommonUtils;
import org.container.platform.web.ui.common.Constants;
import org.container.platform.web.ui.common.ConstantsUrl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class PortalOauth2FailureHandler implements AuthenticationFailureHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(PortalOauth2FailureHandler.class);

    @Override// 여기 에러도 cp 에러
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        String loc = "/error/500";

        if (exception instanceof OAuth2AuthenticationException oauthEx) {
            LOGGER.info("######### AUTHENTICATION EXCEPTION MESSAGE : {}", CommonUtils.loggerReplace(oauthEx.getError()));
        }

        response.sendRedirect(loc);
    }


}
