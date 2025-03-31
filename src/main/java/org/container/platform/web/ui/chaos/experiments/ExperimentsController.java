package org.container.platform.web.ui.chaos.experiments;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExperimentsController {

    private static final String BASE_URL = "chaos/";

    /**
     * Experiments 목록 페이지 이동(Go to the Experiments list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CHAOS_EXPERIMENTS)
    public String getExperimentsList() {
        return BASE_URL + "experiments";
    }

    /**
     * Experiments 상세 페이지 이동(Go to the Experiments details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CHAOS_EXPERIMENTS + ConstantsUrl.URI_CP_DETAILS)
    public String getExperimentsDetails() {
        return BASE_URL + "experimentsDetail";
    }

    /**
     * Experiments 생성 페이지 이동(Go to the Experiments create page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CHAOS_EXPERIMENTS + ConstantsUrl.URI_CP_CREATE)
    public String createExperiments() {
        return BASE_URL + "experimentsCreate";
    }

}

