pre-req to run:
  maven installed (test with 'mvn -version' in command line')
    if not installed, follow this guide https://www.mkyong.com/maven/how-to-install-maven-in-windows/
  java jdk 1.8
  Spring Tool Suite
  
before running, you must enter the source email, as well as the API keys for Mailgun and SendGrid, and the domain for Mailgun in the application.properties file found in tango-card-email-app/backend/src/main/resources. As an example, the fromEmail variable should look something like this when finished:

    fromEmail=testemail@gmail.com

to run:
  open command line at root of project
  execute 'mvn clean install'
  execute 'cd backend'
  execute 'mvn spring-boot:run'
  
