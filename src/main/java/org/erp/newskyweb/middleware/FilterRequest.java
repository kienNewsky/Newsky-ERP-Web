package org.erp.newskyweb.middleware;

import jakarta.servlet.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClientException;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;

@Component
public class FilterRequest implements Filter {
    @Autowired
    private RestClientService apiService;

    private String userName;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;
//        String token = httpServletRequest.getHeader("Authorization");
        String token = getJwtFromRequest(httpServletRequest);
        String path = httpServletRequest.getRequestURI();
        if (!path.equals("/user/login")) {
            if (token == null || !isValidToken(token)) {
//                System.out.println("doFilter: " + token);

                httpServletResponse.sendRedirect("/user/login");
                return;
            }
        }
        CustomHttpServletRequestWrapper wrapper = new CustomHttpServletRequestWrapper(httpServletRequest);
        wrapper.addHeader("X-Username", this.userName);

        chain.doFilter(wrapper, response);
    }

    @Override
    public void destroy() {
        //Clean up logic
    }

    private boolean isValidToken(String token) {
        try {
            String testTokenResult = apiService.testToken(token, "/auth/testToken2");
//            System.out.println(testTokenResult);
            String[] parts = testTokenResult.split(" ");
//            String part1 = parts[0];
            this.userName = parts[1];
            return "OK".equals(parts[0]);
        } catch (RestClientException ex) {
            return false;
        }
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        } else {
            return getJwtFromCookie(request);
        }
    }

    private String getJwtFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("JWT_TOKEN".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }
}
