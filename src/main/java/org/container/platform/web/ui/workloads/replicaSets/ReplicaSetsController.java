package org.container.platform.web.ui.workloads.replicaSets;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * ReplicaSets Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */
@Controller
public class ReplicaSetsController {

    private static final String BASE_URL = "replicaSets/";

    /**
     * ReplicaSets 목록 페이지 이동(Go to the replicaSets list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_REPLICASETS )
    public String getReplicaSetsList() {
        return BASE_URL + "replicaSets";
    }

    /**
     * ReplicaSets 상세 페이지 이동(Go to the replicaSets details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_WORKLOADS_REPLICASETS + ConstantsUrl.URI_CP_DETAILS)
    public String getReplicaSetsDetails() {
        return BASE_URL + "replicaSetsDetail";
    }
}