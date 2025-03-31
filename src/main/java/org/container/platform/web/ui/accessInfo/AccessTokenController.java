package org.container.platform.web.ui.accessInfo;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Access Token Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2022.07.13
 */

@Controller
public class AccessTokenController {
    private static final String BASE_URL = "accessInfo/";

    /**
     * Access Info 페이지 이동(Go to the Access Info page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_INFO_ACCESS)
    public String getAccessInfo() {
        return BASE_URL + "accessInfo";
    }

}
