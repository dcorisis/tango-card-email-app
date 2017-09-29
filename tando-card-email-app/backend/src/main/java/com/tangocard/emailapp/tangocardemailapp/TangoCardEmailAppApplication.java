package com.tangocard.emailapp.tangocardemailapp;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@RestController
@SpringBootApplication
public class TangoCardEmailAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TangoCardEmailAppApplication.class, args);
	}
	
    @RequestMapping("/SendMail")
    public String SendMail() {
        return "hello world!!";
    }
}
