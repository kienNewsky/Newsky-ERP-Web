package org.erp.newskyweb.login;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private RestClientService restClientService;

    @GetMapping("/login")
    public String getLogin(Model model) {
        return "/employee/login";
    }

    @PostMapping("/login")
    public void postLogin(@ModelAttribute UserDTO userDTO, HttpServletResponse response) {
        try {
            String token = restClientService.generateToken(userDTO);
            //Set Cookie and redirect
            Cookie cookie = new Cookie("JWT_TOKEN", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(true);
            cookie.setPath("/");
            response.addCookie(cookie);
        } catch (RestClientException ex) {
            // Redirect to
        }
    }
}
