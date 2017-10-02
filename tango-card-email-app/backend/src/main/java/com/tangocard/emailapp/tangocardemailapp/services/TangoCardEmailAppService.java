package com.tangocard.emailapp.tangocardemailapp.services;

import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Value;

import com.sendgrid.Content;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;
import com.tangocard.emailapp.tangocardemailapp.models.Email;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TangoCardEmailAppService {
		
	public Email sendEmail(Email newEmail, String mailGunApiKey, String mailGunDomain, String sendGridApiKey) {
    	newEmail.setSent(true);
    	ClientResponse mailGunResult;
    	Response sendGridResult;
		try {
			  Client client = Client.create();
			  client.addFilter(new HTTPBasicAuthFilter("api", mailGunApiKey));
			  WebResource webResource = client.resource("https://api.mailgun.net/v3/" + mailGunDomain + "/messages");
			  MultivaluedMapImpl formData = new MultivaluedMapImpl();
			  formData.add("from", newEmail.getFromEmail());
			  formData.add("to", newEmail.getToEmail());
			  formData.add("subject", "Simple Mailgun Example");
			  formData.add("text", newEmail.getContent());
			  mailGunResult = webResource.type(MediaType.APPLICATION_FORM_URLENCODED).post(ClientResponse.class,
			      formData);
			  newEmail.setMailGunErrorCode(mailGunResult.getStatus());
		}
		catch(Exception e) {
			com.sendgrid.Email from = new com.sendgrid.Email(newEmail.getFromEmail());
		    String subject = "Sending with SendGrid is Fun";
		    com.sendgrid.Email to = new com.sendgrid.Email(newEmail.getToEmail());
		    Content content = new Content("text/plain", newEmail.getContent());
		    Mail mail = new Mail(from, subject, to, content);

		    SendGrid sg = new SendGrid(sendGridApiKey);
		    Request request = new Request();
		    try {
			      request.setMethod(Method.POST);
			      request.setEndpoint("mail/send");
			      request.setBody(mail.build());
			      sendGridResult = sg.api(request);
			      newEmail.setSendGridErrorCode(sendGridResult.getStatusCode());
		    } catch (Exception ex) {
		    		newEmail.setSent(false);
		    }
		}
		DateFormat dateFormat = new SimpleDateFormat("MMMM dd,yyyy h:mm:ss a z");
		Date date = new Date();
		newEmail.setDateSent(dateFormat.format(date));
		return newEmail;
	}
	
}
