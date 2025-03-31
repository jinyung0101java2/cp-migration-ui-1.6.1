package org.container.platform.web.ui.managements.resourceQuotas;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * ResourceQuotas Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.04
 **/
@Controller
public class ResourceQuotasController {

    private static final String BASE_URL = "resourceQuotas/";

    /**
     * ResourceQuotas 목록 페이지 이동(Go to the resourceQuotas list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_RESOURCEQUOTAS )
    public String getLimitResourceQuotasList() {
        return BASE_URL + "resourceQuotas";
    }


    /**
     * ResourceQuotas 상세 페이지 이동(Go to the resourceQuotas details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_RESOURCEQUOTAS + ConstantsUrl.URI_CP_DETAILS)
    public String getResourceQuotasDetails() {
        return BASE_URL + "resourceQuotasDetail";
    }
}
