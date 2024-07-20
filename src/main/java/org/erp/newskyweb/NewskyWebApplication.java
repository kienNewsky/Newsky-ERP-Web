package org.erp.newskyweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.client.RestClientSsl;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestClient;

@SpringBootApplication
public class NewskyWebApplication {

    public static void main(String[] args) {

        SpringApplication.run(NewskyWebApplication.class, args);

       
    }
// Do somthing
}
