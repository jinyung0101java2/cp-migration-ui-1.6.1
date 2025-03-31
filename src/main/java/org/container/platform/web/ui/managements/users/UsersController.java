package org.container.platform.web.ui.managements.users;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Users Controller 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2022.10.09
 **/
@PreAuthorize("@authSecurity.checkIsClusterAdmin()")
@Controller
public class UsersController {


    private static final String BASE_URL = "users/";


    /**
     * Admin 목록 페이지 이동(Go to the admin list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_USERS_ADMIN )
    public String getAdminList() {
        return BASE_URL + "admin";
    }


    /**
     * Users 목록 페이지 이동(Go to the users list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_USERS )
    public String getUsersList() {
        return BASE_URL + "users";
    }



    /**
     * 비활성화 Users 목록 페이지 이동(Go to the inactive users list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_INACTIVE_USERS )
    public String getInactiveUsersList() {
        return BASE_URL + "inactiveUsers";
    }


    /**
     * Users 상세 페이지 이동(Go to the users details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_USERS + ConstantsUrl.URI_CP_DETAILS)
    public String getUsersDetails() {
        return BASE_URL + "usersDetail";
    }


    /**
     * Users 수정 페이지 이동(Go to the users update page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_MANAGEMENTS_USERS + ConstantsUrl.URI_CP_UPDATE)
    public String updateUsers() { return BASE_URL + "usersUpdate"; }


}
