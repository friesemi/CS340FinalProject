-- CREATION OF DATABASE --
-- Create the database
CREATE DATABASE IF NOT EXISTS WLTDMUDatabase CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE WLTDMUDatabase;

-- Create Owners Entity (Shayla)
DROP TABLE IF EXISTS Owners;

CREATE TABLE Owners (
	ownersId int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	num_dogs int NOT NULL
);

-- Create Dogs Entity (Michael)
DROP TABLE IF EXISTS Breeders;

CREATE TABLE Breeders (
	breederId int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	specialized_breeds varchar(255) NOT NULL,
	has_dogs boolean NOT NULL,
	dogs_avail int NOT NULL
);

-- Create Breeder Entity (Shayla)
DROP TABLE IF EXISTS Breeders;

CREATE TABLE Owners (
	ownersId int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	num_dogs int NOT NULL
);

-- Create Dog_Meets Entity (Michael)
DROP TABLE IF EXISTS Dog_Meets;

CREATE TABLE Dog_Meets (
	dmId int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
	dogId int NOT NULL,		-- Foreign Key
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	rsvp varchar(255) NOT NULL,
	breed_specific varchar(255) NOT NULL,
	size_specific varchar(255) NOT NULL,

	 
-- Create Dog_Walkers Entity (Michael)
DROP TABLE IF EXISTS Dog_Walkers;

CREATE TABLE Dog_Walkers (
	walkerId int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
	dogId int NOT NULL,		-- Foreign Key
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	num_spots int NOT NULL
);

-- Create Owner_Walker Entity (Shayla)
CREATE TABLE Owner_Walker (
	ownersId int NOT NULL,
	walkerId int NOT NULL,
	PRIMARY KEY (ownersId, walkerId),
	FOREIGN KEY	fk_ownersId(ownerId) REFERENCES Owners(ownerId)
	ON DELETE CASCADE,
	FOREIGN KEY	fk_walkerId(walkerId) REFERENCES Dog_Walkers(walkerId)
	ON DELETE CASCADE
);

-- Create Owner_Breeder Entity (Michael)
DROP TABLE IF EXISTS Owner_Breeder

CREATE TABLE Owner_Breeder (
	breederId int NOT NULL,
	ownerId int NOT NULL,
	PRIMARY KEY (breederId, ownerId),
	FOREIGN KEY	fk_breederId(breederId) REFERENCES Breeders(breederId)
	ON DELETE CASCADE,
	FOREIGN KEY	fk_ownerId(ownerId) REFERENCES Owners(ownerId)
	ON DELETE CASCADE
);

-- Setup FK relationships --


-- Setup Dog_Meets relationship
ALTER TABLE Dog_Meets
ADD CONSTRAINT fk_dogId
FOREIGN KEY (dogId) REFERENCES Dogs(dogId)
ON DELETE CASCADE;

-- Setup Dog_Walkers relationship
ALTER TABLE Dog_Walkers
ADD CONSTRAINT fk_dogId
FOREIGN KEY (dogId) REFERENCES Dogs(dogId)
ON DELETE CASCADE;


-- Insert Sample Data --


-- Example Owners Data
INSERT INTO Owners (name, email, num_dogs)
VALUES ("Shayla", "transhay@oregonstate.edu", "1");

INSERT INTO Owners (name, email, num_dogs)
VALUES ("Sylvia", "sylvia.tran06@gmail.com", "1");

INSERT INTO Dogs (name, email, num_dogs)
VALUES ("Ron", "leron@oregonstate.edu", "1");

-- Example Breeders Data
INSERT INTO Breeders (name, email, specialized_breeds, has_dogs, dogs_avail)
VALUES ("Vicki", "boxnbullz@gmail.com", "English Bulldogs", 0, 0);

INSERT INTO Breeders (name, email, specialized_breeds, has_dogs, dogs_avail)
VALUES ("Courtney", "courtney@gmail.com", "English Bulldogs", 10, 3);

INSERT INTO Breeders (name, email, specialized_breeds, has_dogs, dogs_avail)
VALUES ("Umpqua Valle Kennels", "umpquavalleykennels@gmail.com", "French Bulldogs", 5, 0);

-- Example Dogs Data
INSERT INTO Dogs (name, breed, size)
VALUES ("Fido", "Shizu", "Small");

INSERT INTO Dogs (name, breed, size)
VALUES ("Clifford", "Red", "Large");

INSERT INTO Dogs (name, breed, size)
VALUES ("Milo", "Dachshund", "Small");

-- Example Dog_Meets Data
INSERT INTO Dog_Meets (dogId, name, email, rsvp, breed_specific, size_specific)
VALUES (1, "Dogs-R-Us", "DogsRUs@hello.com", yes, no, no);

INSERT INTO Dog_Meets (dogId, name, email, rsvp, breed_specific, size_specific)
VALUES (3, "Halloweenies", "spooky@mail.com", no, yes, yes);

INSERT INTO Dog_Meets (dogId, name, email, rsvp, breed_specific, size_specific)
VALUES (2, "Largest Dogs Around", "big_bois@huge.com", yes, no, yes);

-- Example Dog_Walkers Data
INSERT INTO Dog_Walkers (dogId, name, email, num_spots)
VALUES (1, "Jina", "Jina<3Dogs@puppies.com", 1);

INSERT INTO Dog_Walkers (dogId, name, email, num_spots)
VALUES (3, "Susan", "SusieQ@gmail.com", 3);

INSERT INTO Dog_Walkers (dogId, name, email, num_spots)
VALUES (2, "Karen", "kDoggos@dogs.com", 5);
