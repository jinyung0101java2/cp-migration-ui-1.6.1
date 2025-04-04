package org.container.platform.web.ui.config;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Custom Annotation to pass Auth AOP Logic
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface NoAuth {
}
