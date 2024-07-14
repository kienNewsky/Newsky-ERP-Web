package org.erp.newskyweb.middleware;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;

@Component
public class FilterRequest implements Filter {
    @Autowired
    private RestClientService apiService;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;
        String token = httpServletRequest.getHeader("Authorization");
        String path = httpServletRequest.getRequestURI();
        if (!path.equals("/user/login")) {
            if (token == null || !isValidToken(token)) {
                System.out.println(path);
                httpServletResponse.sendRedirect("/login");
            }
        }
    }

    @Override
    public void destroy() {
        //Clean up logic
    }

    private boolean isValidToken(String token) {
        try {
            String testTokenResult = apiService.testToken(token);
            return "OK".equals(testTokenResult);
        } catch (RestClientException ex) {
            return false;
        }
    }
}
