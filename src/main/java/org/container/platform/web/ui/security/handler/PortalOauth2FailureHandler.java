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

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        String loc = "/error/500";

        if (exception instanceof OAuth2AuthenticationException oauthEx) {
            LOGGER.info("######### AUTHENTICATION EXCEPTION MESSAGE : {}", CommonUtils.loggerReplace(oauthEx.getError()));
            String errorCode = oauthEx.getError().getErrorCode();
            if (errorCode.equals(Constants.LOGIN_INACTIVE_USER_MESSAGE)) {
                loc = ConstantsUrl.URl_CP_INACTIVE;
            }
            if (Constants.LOGIN_UNAUTHORIZED_MESSAGE.contains(errorCode)) {
                loc = "/error/401";
            }
        }

        response.sendRedirect(loc);
    }


}
