package org.container.platform.web.ui.clusters.namespaces;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Namespaces Controller 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2021.04.27
 */
@Controller
public class NamespacesController {

    private static final String BASE_URL = "namespaces/";

    /**
     * Namespaces 목록 페이지 이동(Go to the namespaces list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NAMESPACES)
    public String getNamespacesList() {
        return BASE_URL + "namespaces";
    }


    /**
     * Namespaces 생성 페이지 이동(Go to the namespaces create page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NAMESPACES + ConstantsUrl.URI_CP_CREATE)
    public String createNamespaces() {
        return BASE_URL + "namespacesCreate";
    }


    /**
     * Namespaces 상세 페이지 이동(Go to the namespaces details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NAMESPACES + ConstantsUrl.URI_CP_DETAILS)
    public String getNamespacesDetails() {
        return BASE_URL + "namespacesDetail";
    }


    /**
     * Namespaces 수정 페이지 이동(Go to the namespaces update page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NAMESPACES + ConstantsUrl.URI_CP_UPDATE)
    public String updateNamespaces() {
        return BASE_URL + "namespacesUpdate";
    }

}
