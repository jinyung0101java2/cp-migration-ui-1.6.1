package org.container.platform.web.ui.login.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Authentication Response Model 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class AuthenticationResponse {

    private String resultCode;
    private String resultMessage;
    private Integer httpStatusCode;
    private String detailMessage;
    private String userId;
    private String userAuthId;
    private String userType;
    private String token;
    private String clusterId;
    private Boolean isSuperAdmin;
}
