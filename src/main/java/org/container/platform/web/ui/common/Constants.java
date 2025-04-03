package org.container.platform.web.ui.common;

/**
 * Constants 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2020.08.25
 */
public class Constants {

    public static final String RESULT_STATUS_SUCCESS = "SUCCESS";
    public static final String RESULT_STATUS_FAIL = "FAIL";

    public static final String TARGET_CP_API = "cpApi";
    public static final String EMPTY_VALUE ="-";
    public static final String AUTH_INACTIVE_USER = "INACTIVE_USER";

    public static final String LOGIN_TOKEN_EXPIRED = "TOKEN_EXPIRED";
    public static final String LOGIN_FAIL_MESSAGE = "LOGIN_FAILED";
    public static final String LOGIN_INACTIVE_USER_MESSAGE = "INACTIVE_USER";
    public static final String CHECK_Y = "Y";
    public static final String CHECK_N = "N";

    public static final String CHECK_TRUE = "true";
    public static final String CHECK_FALSE = "false";

    private Constants() {
        throw new IllegalStateException();
    }

}