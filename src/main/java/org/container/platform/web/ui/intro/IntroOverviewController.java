package org.container.platform.web.ui.intro;

import org.container.platform.web.ui.common.Constants;
import org.container.platform.web.ui.common.ConstantsUrl;
import org.container.platform.web.ui.common.RestTemplateService;
import org.container.platform.web.ui.login.LoginService;
import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.container.platform.web.ui.security.model.OAuthTokens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * Intro Overview Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */
@Controller
public class IntroOverviewController {

    @Autowired
    private LoginService loginService;
    private final RestTemplateService restTemplateService;

    public IntroOverviewController(RestTemplateService restTemplateService) {
        this.restTemplateService = restTemplateService;
    }

    /**
     * index 페이지 이동(Move Intro overview page)
     *
     * @return the view
     */
    @GetMapping(value = {"/", ConstantsUrl.URI_CP_GLOBAL_URL})
    public Object baseView(Model model) {
        OAuthTokens oAuthTokens = restTemplateService.getKeyCloakToken();
        UsersLoginMetaData usersLoginMetaData = loginService.getAuthenticationUserMetaData();

        model.addAttribute("accessToken", oAuthTokens.getAccessToken());
        if (Constants.AUTH_ADMIN_LIST.contains(usersLoginMetaData.getUserType())) {
            return "migrations/migrationsCreate";
        }

        model.addAttribute("accessToken", oAuthTokens.getAccessToken());

        return "migrations/migrationsCreate";
    }


    /*public String getMigrationsCreate(Model model) {

        OAuthTokens oAuthTokens = restTemplateService.getKeyCloakToken();
        model.addAttribute("accessToken", oAuthTokens.getAccessToken());

        return BASE_URL + "migrationsCreate";
    }*/
}

