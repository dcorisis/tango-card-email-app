package com.tangocard.emailapp.tangocardemailapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RestController;

import com.tangocard.emailapp.tangocardemailapp.models.Email;
import com.tangocard.emailapp.tangocardemailapp.services.TangoCardEmailAppService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
public class TangoCardEmailAppApplication {
	
	@Value("${fromEmail}")
	private String fromEmail;
	
	@Value("${mailGunApiKey}")
	private String mailGunApiKey;
	
	@Value("${mailGunDomain}")
	private String mailGunDomain;
	
	@Value("${sendGridApiKey}")
	private String sendGridApiKey;

	public static void main(String[] args) {
		SpringApplication.run(TangoCardEmailAppApplication.class, args);
	}
	
    @RequestMapping(value = "/SendMail")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Email> SendMail(@RequestBody Email newEmail) {
    	TangoCardEmailAppService mailService = new TangoCardEmailAppService();
    	newEmail.setFromEmail(fromEmail);
    	mailService.sendEmail(newEmail, mailGunApiKey, mailGunDomain, sendGridApiKey);
        return new ResponseEntity<Email>(newEmail, HttpStatus.OK);
    }
}
