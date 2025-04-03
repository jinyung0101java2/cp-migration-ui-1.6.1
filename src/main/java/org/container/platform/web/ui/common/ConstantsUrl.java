package org.container.platform.web.ui.common;

/**
 * Constants 클래스
 *
 * @author kjhoon
 * @version 1.0
 * @since 2021.06.14
 */
public class ConstantsUrl {
    public static final String URI_CP_CONFIGS_CONFIGMAPS = "/container-platform/configMaps";//

    public static final String URI_CP_GLOBAL_CLUSTERS = "/global/clusters";//
    public static final String URI_CP_GLOBAL_CLOUD_ACCOUNTS = "/global/cloudAccounts";//
    public static final String URI_CP_GLOBAL_INSTANCE_CODE_TEMPLATES = "/global/templates";//
    public static final String URI_CP_GLOBAL_SSH_KEYS = "/global/sshKeys";//

    public static final String URI_CP_LIST = "/list";
    public static final String URI_CP_DETAILS = "/details";
    public static final String URI_CP_CREATE = "/create";
    public static final String URI_CP_UPDATE = "/update";
    public static final String URI_CP_POPUP = "/popup";
    public static final String URI_CP_LOGS = "/logs";

    public static final String URI_CP_ADD = "/add";
    public static final String URI_CP_UPGRADE = "/upgrade";
    public static final String URI_CP_GET_USER_LOGIN_DATA = "/container-platform/userLoginData";
    public static final String URI_CP_REFRESH_TOKEN = "/container-platform/refreshToken";

    public static final String URI_CP_SESSION_OUT = "/sessionout";
    public static final String URI_AUTHENTICATION_FAILED = "/error/authenticationFailed";
    public static final String URI_CP_LOGOUT ="/logout";
    public static final String URl_CP_INACTIVE = "/inactive";

    public static final String URI_API_SET_CLUSTER_AUTHORITY="/setAuthority";

    //CP-API REQUEST URI
    public static final String URL_API_LOGIN = "/login";
    public static final String URL_API_SIGNUP = "/signUp";

    public static final String URI_API_REFRESH_TOKEN = "/refreshtoken";

    //LOCALE LANGUAGE
    public static final String URL_API_LOCALE_LANGUAGE = "/localeLanguage";
    public static final String URL_API_CHANGE_LOCALE_PARAM = "language";
    public static final String LANG_KO = "ko";
    public static final String LANG_KO_START_WITH = "ko_";
    public static final String LANG_EN = "en";

    public static final String  URI_CP_BASE_URL = "/";
    public static final String  URI_CP_MIGRATIONS_LIST = "/migrations";
    public static final String  URI_CP_MIGRATIONS_DETAIL = "/migrations/detail";
    public static final String  URI_CP_MIGRATIONS_CREATE = "/migrations/create";

    public static final String  URI_CP_ACCOUNTS_LIST = "/accounts";
    public static final String  URI_CP_ACCOUNTS_DETAIL = "/accounts/detail";
    public static final String  URI_CP_ACCOUNTS_CREATE = "/accounts/create";
}