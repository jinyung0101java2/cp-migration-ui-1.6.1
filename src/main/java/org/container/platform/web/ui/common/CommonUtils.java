package org.container.platform.web.ui.common;

/**
 * Common Utils 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
public class CommonUtils {

    /**
     * LOGGER 개행문자 제거 (Object)
     *
     * @param obj
     * @return String the replaced string
     */
    public static String loggerReplace(Object obj) {
        return obj.toString().replaceAll("[\r\n]","");
    }

    /**
     * LOGGER 개행문자 제거 (String)
     *
     * @param str
     * @return String the replaced string
     */
    public static String loggerReplace(String str) {
        return str.replaceAll("[\r\n]","");
    }

}

