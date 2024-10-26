package org.erp.newskyweb.middleware;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GlobalControllerAdvise {

    @Value("${api.domain}")
    private String apiDomain;

    private String getToken(String tokenName, HttpServletRequest request) {
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

    @ModelAttribute
    public void addCommonModelAttributes(Model model, HttpServletRequest request) {
        String username = request.getHeader("X-Username");
        String token = getToken("JWT_TOKEN", request);
        model.addAttribute("token", token);
        model.addAttribute("sqlHost", apiDomain);
        model.addAttribute("username", username);
    }
}
