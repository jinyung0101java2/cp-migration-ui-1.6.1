package org.container.platform.web.ui.migrations;

import jakarta.servlet.http.HttpServletRequest;
import org.container.platform.web.ui.common.ConstantsUrl;
import org.container.platform.web.ui.common.RestTemplateService;
import org.container.platform.web.ui.security.model.OAuthTokens;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MigrationsController {

    private final RestTemplateService restTemplateService;

    private static final String BASE_URL = "migrations/";

    public MigrationsController(RestTemplateService restTemplateService) {
        this.restTemplateService = restTemplateService;
    }

    @GetMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_LIST)
    public String getMigrationsList() {
        return BASE_URL + "migrations";
    }

    @GetMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_DETAIL)
    public String getMigrationsDetail() {
        return BASE_URL + "migrationsDetail";
    }

    @RequestMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_CREATE)
    public String getMigrationsCreate(Model model) {

        OAuthTokens oAuthTokens = restTemplateService.getKeyCloakToken();
        model.addAttribute("accessToken", oAuthTokens.getAccessToken());

        return BASE_URL + "migrationsCreate";
    }
}
