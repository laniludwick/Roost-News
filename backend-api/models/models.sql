-- Models include: Users and Articles and an associative table in between.
-- CREATE DATABASE roostnews;
-- USE roostnews;
-- Note: Manually shelled into MySQL and added DB and tables using commands below

CREATE TABLE user (
  id int(11) NOT NULL
  PRIMARY KEY AUTO_INCREMENT,
  fname varchar(255) NOT NULL,
  lname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  userPassword varchar(255) NOT NULL
); 

CREATE TABLE bookmark (
  id int(11) NOT NULL 
  PRIMARY KEY AUTO_INCREMENT,
  author varchar(255),
  title varchar(255),
  urlToImg varchar(255),
  articleDescription varchar(5000),
  content varchar(10000),
  articleURL varchar(255),
  publishedAt date,
  userID int(11) NOT NULL,
  INDEX usrID (userID),
  FOREIGN KEY (userID)
    REFERENCES user (id)
    ON DELETE CASCADE
); 

