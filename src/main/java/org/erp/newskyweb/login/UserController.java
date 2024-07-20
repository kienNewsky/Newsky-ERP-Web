package org.erp.newskyweb.login;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;

import java.io.IOException;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private RestClientService restClientService;

    @GetMapping("/login")
    public String getLogin(Model model) {
        model.addAttribute("UserDTO", new UserDTO());
        return "employee/login";
    }

    @PostMapping("/login")
    public void postLogin(@ModelAttribute UserDTO userDTO, Model model, HttpServletResponse response) throws IOException {

        model.addAttribute("UserDTO", userDTO);
        try {
            System.out.println("Có chạy thủ tục login");
            String token = restClientService.generateToken(userDTO);
            //Set Cookie and redirect
            System.out.println("Nếu có lỗi sẽ ko thấy dòng này");
            Cookie cookie = new Cookie("JWT_TOKEN", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(false);
            cookie.setPath("/");
            cookie.setMaxAge(60 * 60 * 24); // Example: 1 day expiry
            cookie.setDomain("123.31.12.44"); // Ensure this is correct for cross-domain requests
//            cookie.setSameSite = "None"; // for cross-origin requests

            response.addCookie(cookie);
            String sameSiteCookie = String.format("%s=%s; %s; %s; %s; %s",
                    cookie.getName(),
                    cookie.getValue(),
                    "Path=" + cookie.getPath(),
                    "HttpOnly",
                    "Secure",
                    "SameSite=None");

            response.setHeader("Set-Cookie", sameSiteCookie);

            response.sendRedirect("/");
        } catch (RestClientException ex) {
            // Redirect to
            response.sendRedirect("/user/login?error=true");
        } catch (IOException e) {
            throw new RuntimeException("Lỗi IO ở thủ tục login", e);
        }
    }
}
