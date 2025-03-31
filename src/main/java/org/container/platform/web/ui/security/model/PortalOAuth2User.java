package org.container.platform.web.ui.security.model;

import org.container.platform.web.ui.login.model.UsersLoginMetaData;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import java.util.Collection;
import java.util.Map;

public class PortalOAuth2User extends DefaultOAuth2User {
    private UsersLoginMetaData usersLoginMetaData;

    public PortalOAuth2User(Collection<? extends GrantedAuthority> authorities, Map<String, Object> attributes, String nameAttributeKey,
                            UsersLoginMetaData usersLoginMetaData) {
        super(authorities, attributes, nameAttributeKey);
        this.usersLoginMetaData = usersLoginMetaData;
    }

    public UsersLoginMetaData getUsersLoginMetaData() {
        return usersLoginMetaData;
    }

    public void setUsersLoginMetaData(UsersLoginMetaData usersLoginMetaData) {
        this.usersLoginMetaData = usersLoginMetaData;
    }
}
