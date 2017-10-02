package com.tangocard.emailapp.tangocardemailapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.tangocard.emailapp.tangocardemailapp.models.Email;

public interface TangoCardEmailAppPgRepository extends CrudRepository<Email, Long> {
		
	
}
