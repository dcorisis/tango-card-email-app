package com.tangocard.emailapp.tangocardemailapp.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//@Configuration
@Entity
@Table(name = "email")
public class Email implements Serializable {
	
	private static final long serialVersionUID = -3009157732242241606L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "to_email")
	private String toEmail;
	@Column(name = "from_email")
	private String fromEmail;
	@Column(name = "date_sent")
	private String dateSent;
	@Column(name = "content")
	private String content;
	@Column(name = "sent")
	private boolean sent;
	@Column(name = "mail_gun_error_code")
	private int mailGunErrorCode;
	@Column(name = "send_grid_error_code")
	private int sendGridErrorCode;
	
	protected Email() {
	}
	
	@Override
	public String toString() {
		return String.format("Email[id=%d, toEmail='%s', fromEmail='%s', dateSent='%s', content='%s', sent='%b', mailGunErrorCode='%d', sendGridErrorCode='%d']",
								id, toEmail, fromEmail, dateSent, content, sent, mailGunErrorCode, sendGridErrorCode);
	}
	
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
