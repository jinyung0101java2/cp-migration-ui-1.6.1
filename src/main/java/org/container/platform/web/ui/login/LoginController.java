package org.container.platform.web.ui.login;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.container.platform.web.ui.common.ConstantsUrl;
import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.container.platform.web.ui.security.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;

import java.util.Locale;


/**
 * Login Controller 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2021.06.15
 **/
@Tag(name = "LoginController v1")
@RestController
public class LoginController {
    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);


    @Autowired
    LocaleResolver localeResolver;

    private final LoginService loginService;
    private final ProviderService providerService;
    private final SecurityUtils securityUtils;

    @Autowired
    public LoginController(LoginService loginService, ProviderService providerService, SecurityUtils securityUtils) {
        this.loginService = loginService;
        this.providerService = providerService;
        this.securityUtils = securityUtils;
    }


    /**
     * User LoginData 정보 조회
     *
     * @return the resultStatus
     */
    @Operation(summary = "User LoginData 정보 조회 (get User LoginData Info)")
    @GetMapping(value = ConstantsUrl.URI_CP_GET_USER_LOGIN_DATA)
    @ResponseBody
    public UsersLoginMetaData getAdminLoginData() {
        UsersLoginMetaData usersLoginMetaData = loginService.getAuthenticationUserMetaData();
        return usersLoginMetaData;
    }


    /**
     * User Refresh Token 조회
     *
     * @return the usersLoginMetaData
     */
    @Operation(summary = " User Refresh Token 조회 (Get User Refresh Token)")
    @GetMapping(value = ConstantsUrl.URI_CP_REFRESH_TOKEN)
    @ResponseBody
    public UsersLoginMetaData getReFreshToken() {
        providerService.getRefreshToken();
        UsersLoginMetaData usersLoginMetaData = loginService.getAuthenticationUserMetaData();
        return usersLoginMetaData;
    }

    /**
     * Locale 언어 변경 (Change Locale Language)
     */
    @Operation(summary = "Locale 언어 변경 (Change Locale Language)")
    @PutMapping(value = ConstantsUrl.URL_API_LOCALE_LANGUAGE)
    public void changeLocaleLang(@RequestParam(required = false, name = ConstantsUrl.URL_API_CHANGE_LOCALE_PARAM, defaultValue = ConstantsUrl.LANG_EN) String language, HttpServletRequest request, HttpServletResponse response) {
        try {
            Locale locale = new Locale(language);
            localeResolver.setLocale(request, response, locale);
        } catch (Exception e) {
            LOGGER.info("EXCEPTION OCCURRED IN LOCALE LANGUAGE CHANGE..");
        }
    }


    /**
     * Locale 언어 조회 (Get Locale Language)
     */
    @Operation(summary = "Locale 언어 조회 (Get Locale Language)")
    @GetMapping(value = ConstantsUrl.URL_API_LOCALE_LANGUAGE)
    public String getLocaleLang() {
        try {
            Locale locale = LocaleContextHolder.getLocale();

            if (locale.toString().equalsIgnoreCase(ConstantsUrl.LANG_KO)) {
                return ConstantsUrl.LANG_KO;
            }

            if (locale.toString().toLowerCase().startsWith(ConstantsUrl.LANG_KO_START_WITH)) {
                return ConstantsUrl.LANG_KO;
            }

        } catch (Exception e) {
            return ConstantsUrl.LANG_EN;
        }

        return ConstantsUrl.LANG_EN;
    }


    /**
     * User 클러스터 권한 설정 (Setting User Cluster Authority)
     */
    @Operation(summary = "User 클러스터 권한 설정 (Setting User Cluster Authority)")
    @PutMapping(value = ConstantsUrl.URI_API_SET_CLUSTER_AUTHORITY)
    @ResponseBody
    public void setUserClusterAuthority(@RequestBody String userType) {
        securityUtils.updateUserAuthorities(userType);
    }

}
