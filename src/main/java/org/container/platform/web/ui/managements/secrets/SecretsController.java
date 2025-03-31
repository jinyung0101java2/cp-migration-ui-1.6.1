package org.container.platform.web.ui.managements.secrets;

import org.container.platform.web.ui.common.ConstantsUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * Secrets Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2024.07.31
 **/

@Controller
public class SecretsController {

    private static final String BASE_URL = "secrets/";

    /**
     * Secrets 목록 페이지 이동(Go to the secrets list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_SECRETS )
    public String getSecretsList() {
        return BASE_URL + "secrets";
    }

    /**
     * Vault Secrets 목록 페이지 이동(Go to the vault secrets list page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_VAULT_SECRETS)
    public String getVaultSecretsList() {
        return BASE_URL + "vaultSecrets";
    }

    /**
     * Secrets 상세 페이지 이동(Go to the secrets details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_SECRETS + ConstantsUrl.URI_CP_DETAILS)
    public String getSecretsDetails() {
        return BASE_URL + "secretsDetail";
    }

    /**
     * Vault Secrets 상세 페이지 이동(Go to the vault secrets details page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_SECRETS + ConstantsUrl.URI_CP_VAULT_DETAILS)
    public String getVaultSecretsDetails() {
        return BASE_URL + "vaultSecretsDetail";
    }

    /**
     * Secrets 생성 페이지 이동(Go to the secrets create page)
     *
     * @return the view
     */
    @GetMapping(value = ConstantsUrl.URI_CP_CONFIGS_SECRETS + ConstantsUrl.URI_CP_CREATE)
    public String createSecrets() {
        return BASE_URL + "secretsCreate";
    }

}
