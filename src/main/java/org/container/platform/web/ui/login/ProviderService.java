package org.container.platform.web.ui.login;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.container.platform.web.ui.common.RestTemplateService;
import org.container.platform.web.ui.login.model.AuthenticationResponse;
import org.container.platform.web.ui.login.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;

import static org.container.platform.web.ui.common.Constants.TARGET_CP_API;

/**
 * User Service 클래스
 *
 * @author hrjin
 * @version 1.0
 * @since 2020.09.22
 **/
@Service
public class ProviderService {

    private final RestTemplateService restTemplateService;

    @Autowired
    public ProviderService(RestTemplateService restTemplateService) {
        this.restTemplateService = restTemplateService;
    }


    /**
     * 클러스터 관리자 로그인(Post cluster admin login)
     *
     * @param users the users
     * @return the resultStatus
     */
    public AuthenticationResponse loginUsers(Users users) {
        return restTemplateService.send(TARGET_CP_API, ConstantsUrl.URL_API_LOGIN, HttpMethod.POST, users, AuthenticationResponse.class);
    }

}