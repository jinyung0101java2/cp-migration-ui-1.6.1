package org.container.platform.web.ui.login.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * Users Login MetaData Model 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsersLoginMetaData implements Serializable {

    private String userId;
    private String userAuthId;
    private String userType;
    private String accessToken;
    private String userMetaData;
    private String selectedNamespace;
    private String clusterId;
    private List<UsersLoginMetaDataItem> userMetaDataList;
    private String active;
    private Boolean isSuperAdmin;

}