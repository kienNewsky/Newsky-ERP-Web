package org.erp.newskyweb.middleware;

import org.erp.newskyweb.login.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

@Service
public class RestClientService {
    private final String apiUrl;
    private final RestClient restClient; //= RestClient.create();

    public RestClientService() {
        this.apiUrl = "http://123.31.12.44:8080";
        this.restClient = RestClient.builder().baseUrl(apiUrl).build();
    }

    public String testToken(String token) {
        System.out.println("Có chạy thủ tục test TOKEN");
        return restClient
                .get()
                .uri("/auth/testToken")
                .headers(httpHeaders -> httpHeaders.setBearerAuth(token))
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RestClientException(response.getStatusText());
                })
                .body(String.class);
    }

    public String generateToken(UserDTO userDTO) {
        return restClient
                .post()
                .uri("/auth/generateToken")
                .contentType(MediaType.APPLICATION_JSON)
                .body(userDTO)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RestClientException(response.getStatusText());
                })
                .body(String.class);

    }
}
