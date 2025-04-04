package org.container.platform.web.ui.security;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.container.platform.web.ui.common.PropertyService;
import org.container.platform.web.ui.security.handler.PortalOauth2FailureHandler;
import org.container.platform.web.ui.security.handler.PortalOauth2SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

/**
 * Security Config 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Autowired
    private PortalOauth2FailureHandler portalOauth2FailureHandler;

    @Autowired
    private PortalOauth2SecurityFilter portalOauth2SecurityFilter;

    @Autowired
    private PropertyService propertyService;

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> {
            web.ignoring()
                .requestMatchers(
                        "/dist/**",
                        "/plugins/**",
                        "/css/**",
                        "/js/**",
                        "/font/**",
                        "/img/**",
                        "/error/**",
                        "/common/error/**",
                        ConstantsUrl.URI_CP_SESSION_OUT,
                        ConstantsUrl.URl_CP_INACTIVE,
                        "/actuator/**"
                );
        };
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(customizer -> customizer.configurationSource(corsConfigurationSource))
                .formLogin(form -> form.disable())
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().authenticated())
                .addFilterBefore(portalOauth2SecurityFilter, UsernamePasswordAuthenticationFilter.class)
                .oauth2Login(oauth2 -> oauth2
                        .loginPage(propertyService.getKeycloakOauth2LoginPath())
                        .defaultSuccessUrl("/", true)
                        .failureHandler(portalOauth2FailureHandler));
        return http.build();
    }
}