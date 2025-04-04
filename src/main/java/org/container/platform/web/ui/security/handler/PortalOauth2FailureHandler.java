package org.container.platform.web.ui.security.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import java.io.IOException;

/**
 * Portal Oauth2 Failure Handler 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Component
public class PortalOauth2FailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        String loc = "/error/500";
        response.sendRedirect(loc);
    }


}
