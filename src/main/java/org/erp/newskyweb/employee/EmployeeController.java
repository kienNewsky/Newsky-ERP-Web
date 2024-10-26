package org.erp.newskyweb.employee;

import jakarta.servlet.http.HttpServletRequest;
import org.erp.newskyweb.middleware.RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private RestClientService restClientService;

    @GetMapping("/department")
    public String segment(Model model, HttpServletRequest request) {
        
        return "/employee/department";
    }
}
