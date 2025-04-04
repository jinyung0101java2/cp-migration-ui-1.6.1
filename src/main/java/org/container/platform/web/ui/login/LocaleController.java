package org.container.platform.web.ui.login;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.container.platform.web.ui.common.ConstantsUrl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;
import java.util.Locale;

/**
 * Locale Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Tag(name = "LocaleController v1")
@RestController
public class LocaleController {
    private static final Logger LOGGER = LoggerFactory.getLogger(LocaleController.class);


    @Autowired
    LocaleResolver localeResolver;

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

}
