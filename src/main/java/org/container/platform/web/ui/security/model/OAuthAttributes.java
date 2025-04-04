package org.container.platform.web.ui.security.model;

import lombok.Builder;
import lombok.Data;
import java.util.List;
import java.util.Map;

/**
 * OAuth Attributes Model 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Data
public class OAuthAttributes {
    private Map<String, Object> attributes;
    private String nameAttributeKey;
    private String sub;
    private String username;
    private List<String> roles;

    @Builder
    public OAuthAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.nameAttributeKey = "sub";
        this.sub = String.valueOf(attributes.get("sub"));
        this.username = String.valueOf(attributes.get("preferred_username"));
        this.roles = (List<String>) attributes.get("roles");
    }
}

