package org.container.platform.web.ui.managements.configmaps;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Configmaps Controller 클래스
 *
 * @author hkm
 * @version 1.0
 * @since 2022.05.10
 **/
@Controller
public class ConfigMapsController {

    private static final String BASE_URL = "configMaps/";

    /**
     * Configmaps 목록 페이지 이동(Go to the configMaps list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_CONFIGMAPS )
    public String getConfigMapsList() {
        return BASE_URL + "configMaps";
    }


    /**
     * Configmaps 상세 페이지 이동(Go to the configmaps details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_CONFIGMAPS + ConstantsUrl.URI_CP_DETAILS)
    public String getConfigMapsDetails() {
        return BASE_URL + "configMapsDetail";
    }

}
