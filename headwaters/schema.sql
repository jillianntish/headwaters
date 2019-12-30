/**
* execute file from command line:
* mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS waters;
CREATE DATABASE waters;
USE waters;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NULL,
  lastname VARCHAR(255) NOT NULL, 
  -- hashed
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE journals (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- ('2020-01-01 10:10:10')
  date DATETIME NOT NULL,
  text JSON, 
  -- drop down
  status ENUM('anger', 'fear', 'disgust', 'happiness', 'sadness', 'surprise', 'neutral', 'anxiety', 'love', 'depression', 'contempt', 'pride', 'shame', 'envy') NOT NULL,
  -- ounces
  h2oz TINYINT, 
  nutrition JSON,
  -- hours
  sleep TINYINT,
  -- minutes
  exercise TINYINT,
  journal_id_user INT,
    INDEX par_ind (journal_id_user),
    CONSTRAINT fk_journal_user FOREIGN KEY (journal_id_user)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE meds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  med_id_user INT,
    INDEX par_ind (med_id_user),
    CONSTRAINT fk_med_user FOREIGN KEY (med_id_user)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  -- name of medication 
  name VARCHAR(255)
);


CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url JSON
);

CREATE TABLE users_meds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users_meds_user INT,
    INDEX par_ind_user (users_meds_user),
    CONSTRAINT fk_user FOREIGN KEY (users_meds_user)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  users_meds_med INT,
    INDEX par_ind_med (users_meds_med),
    CONSTRAINT fk_med FOREIGN KEY (users_meds_med)
    REFERENCES meds(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  id_img INT,
    INDEX par_ind_img (id_img),
    CONSTRAINT fk_images FOREIGN KEY (id_img)
    REFERENCES images(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  -- miligrams
  dosage INT, 
  -- times per day
  frequency INT,
  notes JSON
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  event_id_user INT,
    INDEX par_ind (event_id_user),
    CONSTRAINT fk_event_user FOREIGN KEY (event_id_user)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  text JSON NOT NULL,
  date DATETIME NOT NULL,
  practicioner VARCHAR(255),
  -- physical address
  location JSON
  -- other: status, type?
);

CREATE TABLE events_meds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  event_med_id_user INT,
    INDEX par_event_med_user_ind (event_med_id_user),
    CONSTRAINT fk_event_med_user FOREIGN KEY (event_med_id_user)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  event_med_id_med INT,
    INDEX par_event_med_med_ind (event_med_id_med),
    CONSTRAINT fk_event_med_med FOREIGN KEY (event_med_id_med)
    REFERENCES meds(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
