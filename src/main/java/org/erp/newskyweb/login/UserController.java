package org.erp.newskyweb.login;

import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
    public void postLogin(@RequestBody UserDTO userDTO) {
        try {
            String token = restClientService.generateToken(userDTO);
            //Set Cookie and redirect
        } catch (RestClientException ex) {
            // Redirect to
        }
    }
}
