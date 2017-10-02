pre-req to run:
  maven installed (test with 'mvn -version' in command line')
    if not installed, follow this guide https://www.mkyong.com/maven/how-to-install-maven-in-windows/
  java jdk 1.8
  Spring Tool Suite
  
before running, you must enter these items into the application.properties file found in tango-card-email-app/backend/src/main/resources:
  the source email
  API keys for Mailgun and SendGrid
  the domain for Mailgun
  the postgres database connection url
  the db username
  the db password
  
As an example, the fromEmail variable should look something like this when finished:

    fromEmail=testemail@gmail.com
    
    
You must also create an email table with the same schema described in the create script below:

      -- Table: public.email

      -- DROP TABLE public.email;

      CREATE TABLE public.email
      (
          id bigint NOT NULL,
          content character varying(255) COLLATE pg_catalog."default",
          date_sent character varying(255) COLLATE pg_catalog."default",
          from_email character varying(255) COLLATE pg_catalog."default",
          mail_gun_error_code integer,
          send_grid_error_code integer,
          sent boolean,
          to_email character varying(255) COLLATE pg_catalog."default",
          CONSTRAINT email_pkey PRIMARY KEY (id)
      )
      WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;

      ALTER TABLE public.email
          OWNER to postgres;

to run:
  open command line at root of project
  execute 'mvn clean install'
  execute 'cd backend'
  execute 'mvn spring-boot:run'
  
