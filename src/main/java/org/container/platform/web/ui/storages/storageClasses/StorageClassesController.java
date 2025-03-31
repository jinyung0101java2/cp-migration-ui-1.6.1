package org.container.platform.web.ui.storages.storageClasses;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * StorageClasses Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2021.05.06
 */
@PreAuthorize("@authSecurity.checkIsClusterAdmin()")
@Controller
public class StorageClassesController {

    private static final String BASE_URL = "storageClasses/";

    /**
     * StorageClasses 목록 페이지 이동(Go to the storageClasses list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_STORAGES_STORAGECLASSES )
    public String getStorageClassesList() {
        return BASE_URL + "storageClasses";
    }

    /**
     * StorageClasses 상세 페이지 이동(Go to the storageClasses details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_STORAGES_STORAGECLASSES + ConstantsUrl.URI_CP_DETAILS)
    public String getStorageClassesDetails() {
        return BASE_URL + "storageClassesDetail";
    }
}
