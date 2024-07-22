package org.erp.newskyweb.produce;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.erp.newskyweb.login.UserDTO;
import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/produce")
public class produce {
    @Autowired
    private RestClientService restClientService;

    @GetMapping("/segment")
    public String segment(Model model, HttpServletRequest request) {
//        UserDTO newUser = new UserDTO("tung", "123");
//        String token = restClientService.generateToken(newUser);
//        System.out.println("Controller Produce method invoked token: " + token);
        String token = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("JWT_TOKEN".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }
        model.addAttribute("token", token);
        
        return "/produce/segment";
    }
}
