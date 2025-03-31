package org.container.platform.web.ui.workloads.deployments;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Deployments Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */
@Controller
public class DeploymentsController {

    private static final String BASE_URL = "deployments/";

    /**
     * Deployments 목록 페이지 이동(Go to the deployments list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_DEPLOYMENTS )
    public String getDeploymentsList() {
        return BASE_URL + "deployments";
    }

    /**
     * Deployments 상세 페이지 이동(Go to the deployments details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_DEPLOYMENTS + ConstantsUrl.URI_CP_DETAILS)
    public String getDeploymentsDetails() {
        return BASE_URL + "deploymentsDetail";
    }
}
