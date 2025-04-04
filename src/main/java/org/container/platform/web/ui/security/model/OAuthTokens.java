package org.container.platform.web.ui.security.model;

import lombok.Data;

/**
 * OAuth Tokens Model 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Data
public class OAuthTokens {

 private String accessToken;
 private String refreshToken;
 private String username;
 private String userId;

 public OAuthTokens(String accessToken, String refreshToken, String username, String userId) {
  this.accessToken = accessToken;
  this.refreshToken = refreshToken;
  this.username = username;
  this.userId = userId;
 }
}
