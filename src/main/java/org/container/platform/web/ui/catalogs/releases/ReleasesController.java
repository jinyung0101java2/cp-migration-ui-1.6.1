package org.container.platform.web.ui.catalogs.releases;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Releases Controller 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2024.04.24
 */

@Controller
public class ReleasesController {
    private static final String BASE_URL = "catalogs/releases/";


/**
     * Releases 목록 페이지 이동(Go to the release list page)
     *
     * @return the view
     */

    @GetMapping(value = ConstantsUrl.URI_CP_CATALOG_RELEASES)
    public String getReleasesList() {
        return BASE_URL + "listReleases";
    }



/**
     * Releases 상세 페이지 이동(Go to the release detail page)
     *
     * @return the view
     */

    @GetMapping(value = ConstantsUrl.URI_CP_CATALOG_RELEASES + ConstantsUrl.URI_CP_DETAILS)
    public String getReleasesDetails() {
        return BASE_URL + "detailReleases";
    }


/**
     * Releases 업그레이드 페이지 이동(Go to the release upgrade page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CATALOG_RELEASES + ConstantsUrl.URI_CP_UPGRADE)
    public String getReleasesUpgrade() {return BASE_URL + "upgradeReleases";}

}

