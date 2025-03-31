package org.container.platform.web.ui.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.container.platform.web.ui.common.CustomIntercepterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;


@Component
public class PortalOauth2LogoutHandler implements LogoutHandler {
    private CustomIntercepterService customIntercepterService;

    @Autowired
    public PortalOauth2LogoutHandler(CustomIntercepterService customIntercepterService) {
        this.customIntercepterService = customIntercepterService;
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        customIntercepterService.logout();
    }
}
