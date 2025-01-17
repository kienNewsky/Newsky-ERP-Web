package org.erp.newskyweb.produce;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.erp.newskyweb.login.UserDTO;
import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
        return "/employee/department";
    }

    @GetMapping("/category")
    public String category() {
        return "/product/category";
    }
}
