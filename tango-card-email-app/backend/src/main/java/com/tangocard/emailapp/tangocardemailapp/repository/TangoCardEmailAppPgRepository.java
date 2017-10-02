package com.tangocard.emailapp.tangocardemailapp.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.CrudRepository;

import com.tangocard.emailapp.tangocardemailapp.models.Email;

public interface TangoCardEmailAppPgRepository extends CrudRepository<Email, Long> {
		
	
}
