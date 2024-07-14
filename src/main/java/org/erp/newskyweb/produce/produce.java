package org.erp.newskyweb.produce;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/produce")
public class produce {
    @GetMapping("/segment")
    public String segment(Model model) {
        System.out.println("Controller Produce method invoked");
        return "/produce/segment";
    }
}
