package org.container.platform.web.ui.common;

import org.container.platform.web.ui.security.SecurityUtils;
import org.container.platform.web.ui.security.model.OAuthTokens;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;
import java.util.Map;

/**
 * Custom Intercepter Service 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Service
public class CustomIntercepterService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CustomIntercepterService.class);
    private SecurityUtils securityUtils;
    private PropertyService propertyService;

    @Autowired
    public CustomIntercepterService(SecurityUtils securityUtils, PropertyService propertyService) {
        this.securityUtils = securityUtils;
        this.propertyService = propertyService;
    }


    /**
     * Check active
     *
     * @return the user info
     */
    public boolean isActive() {
        boolean bFlag = false;

        try {
            OAuthTokens oAuthTokens = securityUtils.getTokens();
            if (oAuthTokens != null) {
                MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
                parameters.add("token", oAuthTokens.getAccessToken());
                parameters.add("client_id", propertyService.getKeycloakClientId());
                parameters.add("client_secret", propertyService.getKeycloakClientSecret());
                Map result = send(propertyService.getKeycloakIntrospectUri(), HttpMethod.POST, parameters);
                if (result != null) {
                    LOGGER.info(String.format("[CHECK USER IS ACTIVE] username:%s, userId:%s, isActive:%s", oAuthTokens.getUsername(), oAuthTokens.getUserId(), result.get("active")));
                    boolean active = (boolean) result.get("active");
                    if (active) bFlag = true;
                }
            }
        } catch (KeyManagementException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            bFlag = false;
        } catch (KeyStoreException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            bFlag = false;
        } catch (NoSuchAlgorithmException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            bFlag = false;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            bFlag = false;
        }

        return bFlag;
    }

    private Map send(String reqUrl, HttpMethod httpMethod, Object bodyObject) throws KeyManagementException, KeyStoreException, NoSuchAlgorithmException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders reqHeaders = new HttpHeaders();
        reqHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        reqHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Object> reqEntity = new HttpEntity<>(bodyObject, reqHeaders);

        LOGGER.debug("POST >> Request: {}, {baseUrl} : {}, Content-Type: {}", CommonUtils.loggerReplace(HttpMethod.POST.toString()), CommonUtils.loggerReplace(reqUrl));
        ResponseEntity<Map> resEntity = restTemplate.exchange(reqUrl, httpMethod, reqEntity, Map.class);

        if (resEntity.getBody() != null) {
            LOGGER.debug("Map send :: Response Type: {}", CommonUtils.loggerReplace(resEntity.getBody().getClass()));
        }

        return resEntity.getBody();
    }

}
