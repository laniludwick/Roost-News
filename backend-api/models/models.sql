-- Models include: Users and Articles and an associative table in between.
-- CREATE DATABASE roostnews;
-- USE roostnews;
-- Note: Manually shelled into MySQL and added DB and tables using commands below

CREATE TABLE users (
  id int(11) NOT NULL
  PRIMARY KEY AUTO_INCREMENT,
  fname varchar(255) NOT NULL,
  lname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  userPassword varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
); 

CREATE TABLE articles (
  id int(11) NOT NULL 
  PRIMARY KEY AUTO_INCREMENT,
  author varchar(255) NOT NULL,
  headline varchar(255) NOT NULL,
  urlToImg varchar(255) NOT NULL,
  articleDescription varchar(5000) NOT NULL,
  content varchar(10000) NOT NULL,
  articleURL varchar(255) NOT NULL,
  publishedAt date NOT NULL,
  userID int(11) NOT NULL,
  INDEX usrID (userID),
  FOREIGN KEY (userID)
    REFERENCES users (id)
    ON DELETE CASCADE,
  active BOOLEAN DEFAULT false
); 