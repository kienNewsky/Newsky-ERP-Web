package org.erp.newskyweb.middleware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Service
public class ApiService {
    private final String apiUrl = "http://123.31.12.44:8080";
    @Autowired
    private WebClient.Builder webClientBuilder;

    public String testToken(String token) {
        String testTokenUrl = apiUrl + "/auth/testToken";
        Mono<String> result = webClientBuilder.build()
                .get()
                .uri(testTokenUrl)
                .headers(headers -> headers.setBearerAuth(token))
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, response -> {
                    if (response.statusCode() == HttpStatus.FORBIDDEN) {
                        return Mono.just(new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid token"));
                    }
                    return Mono.error(new ResponseStatusException(response.statusCode()));
                })
                .bodyToMono(String.class)
                .map(responseBody -> {
                    if ("OK".equals(responseBody)) {
                        return "OK";
                    } else {
                        return "Invalid token";
                    }
                })
                .onErrorResume(ResponseStatusException.class, ex -> {
                    if (ex.getStatusCode() == HttpStatus.FORBIDDEN) {
                        return Mono.just("Invalid token");
                    }
                    return Mono.error(ex);
                });
        
        return result.block();
    }
}
