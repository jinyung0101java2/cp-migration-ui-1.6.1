package org.container.platform.web.ui.common;

import lombok.Data;

/**
 * Active Status Model 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Data
public class ActiveStatus {

    boolean isActive = false;
    String message = Constants.EMPTY_VALUE;

    public ActiveStatus() {
    }

    public ActiveStatus(boolean isActive, String message) {
        this.isActive = isActive;
        this.message = message;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
