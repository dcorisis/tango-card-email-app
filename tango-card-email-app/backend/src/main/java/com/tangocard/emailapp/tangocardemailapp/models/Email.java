package com.tangocard.emailapp.tangocardemailapp.models;

import java.io.Serializable;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

//@Configuration
public class Email implements Serializable {
	private String toEmail;
	private String fromEmail;
	private String dateSent;
	private String content;
	private boolean sent;
	private int mailGunErrorCode;
	private int sendGridErrorCode;
	
	public String getToEmail() {
		return this.toEmail;
	}
	
	public void setToEmail(String toEmail) {
		this.toEmail = toEmail;
	}

	public String getFromEmail() {
		return this.fromEmail;
	}
	
	public void setFromEmail(String fromEmail) {
		this.fromEmail = fromEmail;
	}

	public String getDateSent() {
		return this.dateSent;
	}
	
	public void setDateSent(String dateSent) {
		this.dateSent = dateSent;
	}

	public String getContent() {
		return this.content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}

	public boolean isSent() {
		return sent;
	}

	public void setSent(boolean sent) {
		this.sent = sent;
	}

	public int getMailGunErrorCode() {
		return mailGunErrorCode;
	}

	public void setMailGunErrorCode(int mailGunErrorCode) {
		this.mailGunErrorCode = mailGunErrorCode;
	}

	public int getSendGridErrorCode() {
		return sendGridErrorCode;
	}

	public void setSendGridErrorCode(int sendGridErrorCode) {
		this.sendGridErrorCode = sendGridErrorCode;
	}
}
