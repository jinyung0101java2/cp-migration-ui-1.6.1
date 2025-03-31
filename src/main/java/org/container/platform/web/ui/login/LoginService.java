package org.container.platform.web.ui.login;

import org.container.platform.web.ui.common.Constants;
import org.container.platform.web.ui.login.model.AuthenticationResponse;
import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.container.platform.web.ui.security.model.PortalOAuth2User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * Login Service 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2021.03.16
 **/
@Service
public class LoginService {

    /**
     * 현재 로그인된 Users Details MetaData 조회 (Get Login Meta-Information of currently logged in users)
     *
     * @return the UsersLoginMetaData
     */
    public UsersLoginMetaData getAuthenticationUserMetaData() {
        UsersLoginMetaData usersLoginMetaData = null;
        try {
            PortalOAuth2User portalOAuth2User  = (PortalOAuth2User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            usersLoginMetaData = portalOAuth2User.getUsersLoginMetaData();
        } catch (NullPointerException e) {
            return null;
        }

        return usersLoginMetaData;
    }


    /**
     * Users Details MetaData 객체 생성(Create Users Login Meta-Information Object)
     *
     * @param authenticationResponse the AuthenticationResponse
     */
    public UsersLoginMetaData setAuthDetailsLoginMetaData(AuthenticationResponse authenticationResponse) {
        UsersLoginMetaData usersLoginMetaData = new UsersLoginMetaData();
        usersLoginMetaData.setAccessToken(authenticationResponse.getToken());
        usersLoginMetaData.setClusterId(authenticationResponse.getClusterId());
        usersLoginMetaData.setUserId(authenticationResponse.getUserId());
        usersLoginMetaData.setUserAuthId(authenticationResponse.getUserAuthId());
        usersLoginMetaData.setUserType(authenticationResponse.getUserType());
        usersLoginMetaData.setIsSuperAdmin(authenticationResponse.getIsSuperAdmin());
        usersLoginMetaData.setSelectedNamespace("");
        usersLoginMetaData.setUserMetaData("");
        usersLoginMetaData.setUserMetaDataList(null);
        usersLoginMetaData.setActive(Constants.CHECK_Y);
        return usersLoginMetaData;
    }


    /**
     * 현재 로그인된 Users Details MetaData 업데이트 (Update Login Meta-Information of currently logged in users)
     *
     * @return the UsersLoginMetaData
     */
    public void updateAuthenticationUserMetaData(UsersLoginMetaData usersLoginMetaData) {
        ((PortalOAuth2User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).setUsersLoginMetaData(usersLoginMetaData);
    }
}