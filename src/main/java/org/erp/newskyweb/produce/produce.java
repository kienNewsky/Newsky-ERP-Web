package org.erp.newskyweb.produce;

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
    public String segment(Model model) {
//        UserDTO newUser = new UserDTO("tung", "123");
//        String token = restClientService.generateToken(newUser);
        System.out.println("Controller Produce method invoked token: ");
//        model.addAttribute("token", token);
        return "/produce/segment";
    }
}
