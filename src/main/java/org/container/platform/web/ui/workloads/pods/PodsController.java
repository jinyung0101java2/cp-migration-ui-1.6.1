package org.container.platform.web.ui.workloads.pods;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Pods Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */
@Controller
public class PodsController {

    private static final String BASE_URL = "pods/";

    /**
     * Pods 목록 페이지 이동(Go to the pods list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_PODS )
    public String getPodsList() {
        return BASE_URL + "pods";
    }

    /**
     * Pods 상세 페이지 이동(Go to the pods details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_PODS + ConstantsUrl.URI_CP_DETAILS)
    public String getPodsDetails() {
        return BASE_URL + "podsDetail";
    }

}