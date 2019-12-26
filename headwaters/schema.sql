/**
* execute file from command line:
* mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS waters;
CREATE DATABASE waters;
USE waters;

-- CREATE TABLE users
-- CREATE TABLE users_meds
-- CREATE TABLE meds
-- CREATE TABLE meds_imgs
-- CREATE TABLE events_meds
-- CREATE TABLE events

CREATE TABLE journals (
  id int NOT NULL AUTO_INCREMENT,
  -- date 
  -- user_id
  -- text
  -- mood
  -- h2oz
  -- nutrition
  -- sleep
  -- exercise
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  -- username
  -- firstname
  -- lastname
  -- password
  -- email
  PRIMARY KEY (id)
);

CREATE TABLE users_meds (
  id int NOT NULL AUTO_INCREMENT,
  -- user_id
  -- med_id
  -- image_id
  -- dosage
  -- frequency
  -- notes
  PRIMARY KEY (id)
);

CREATE TABLE meds (
  id int NOT NULL AUTO_INCREMENT,
  -- user_id
  -- text
  -- time
  -- date
  -- address
  PRIMARY KEY (id)
);

CREATE TABLE meds_imgs (
  id int NOT NULL AUTO_INCREMENT,
  -- url
  PRIMARY KEY (id)
);

CREATE TABLE events_meds (
  id int NOT NULL AUTO_INCREMENT,
  -- user_id
  -- med_id
  -- time
  -- date
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  -- user_id
  -- text
  -- time 
  -- date
  -- location
  -- status
  PRIMARY KEY (id)
);


/**
* med seed data
* INSERT INTO meds () VALUES ();
*/ 
