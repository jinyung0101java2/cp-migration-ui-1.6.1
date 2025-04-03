package org.container.platform.web.ui.migrations;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MigrationsController {
    private static final String BASE_URL = "migrations/";
    @GetMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_LIST)
    public String getMigrationsList() {
        return BASE_URL + "migrations";
    }

    @GetMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_DETAIL)
    public String getMigrationsDetail() {
        return BASE_URL + "migrationsDetail";
    }

    @RequestMapping(value = ConstantsUrl.URI_CP_MIGRATIONS_CREATE)
    public String getMigrationsCreate() { return BASE_URL + "migrationsCreate";
    }
}
