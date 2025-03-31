package org.container.platform.web.ui.security.model;

import lombok.Data;

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
