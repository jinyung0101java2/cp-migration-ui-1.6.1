package org.container.platform.web.ui.clusters.nodes;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Nodes Controller 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2021.04.30
 */
@PreAuthorize("@authSecurity.checkIsClusterAdmin()")
@Controller
public class NodesController {
    private static final String BASE_URL = "nodes/";

    /**
     * Nodes 목록 페이지 이동(Go to the nodes list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NODES)
    public String getNodesList() {
        return BASE_URL + "nodes";
    }

    /**
     * Nodes 상세 페이지 이동(Go to the nodes details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CLUSTERS_NODES + ConstantsUrl.URI_CP_DETAILS)
    public String getNodesDetails() {
        return BASE_URL + "nodesDetail";
    }

}