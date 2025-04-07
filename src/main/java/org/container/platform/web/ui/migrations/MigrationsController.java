package org.container.platform.web.ui.migrations;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Migrations Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Controller
public class MigrationsController {
    private static final String BASE_URL = "migrations/";

    @RequestMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_CREATE)
    public String getMigrationsCreate() { return BASE_URL + "migrationsCreate";
    }
}
