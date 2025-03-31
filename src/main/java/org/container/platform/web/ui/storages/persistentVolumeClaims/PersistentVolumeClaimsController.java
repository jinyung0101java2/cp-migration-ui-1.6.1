package org.container.platform.web.ui.storages.persistentVolumeClaims;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * PersistentVolumeClaims Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */

@Controller
public class PersistentVolumeClaimsController {

    private static final String BASE_URL = "persistentVolumeClaims/";

    /**
     * PersistentVolumeClaims 목록 페이지 이동(Go to the persistentVolumeClaims list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_STORAGES_PERSISTENTVOLUMECLAIMS )
    public String getPersistentVolumeClaimsList() {
        return BASE_URL + "persistentVolumeClaims";
    }

    /**
     * PersistentVolumeClaims 상세 페이지 이동(Go to the persistentVolumeClaims details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_STORAGES_PERSISTENTVOLUMECLAIMS + ConstantsUrl.URI_CP_DETAILS)
    public String getPersistentVolumeClaimsDetails() {
        return BASE_URL + "persistentVolumeClaimsDetail";
    }

}