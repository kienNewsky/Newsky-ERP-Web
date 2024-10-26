package org.erp.newskyweb.middleware;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.erp.newskyweb.login.UserDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

@Service
public class RestClientService {
    private final RestClient restClient; //= RestClient.create();
//    @Value("${api.domain}")
//    private String apiUrl;
    @Value("${api.domain}")
    public String apiDomain;

    public RestClientService(@Value("${api.domain}") String apiUrl) {
//        this.apiUrl = "http://123.31.12.44:8080";
        this.restClient = RestClient.builder().baseUrl(apiUrl).build();
    }

    public String testToken(String token, String uri) {
//        System.out.println("Có chạy thủ tục test TOKEN");
        return restClient
                .get()
                .uri(uri) // "/auth/testToken"
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

    public String getCategoryChildren(String tagExtend, String token) {
        return restClient
                .get()
                .uri("/product-service/category/getCategoryChildren/" + tagExtend)
                .headers(httpHeaders -> httpHeaders.setBearerAuth(token))
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RestClientException(response.getStatusText());
                })
                .body(String.class);
    }

    public String getToken(String tokenName, HttpServletRequest request) {
        String token = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (tokenName.equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }
        return token;
    }
}
