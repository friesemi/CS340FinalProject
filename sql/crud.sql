-- CRUD OPERATIONS --
-- Owner Statements (Shayla) --



-- Dog statements (Michael) --
-- CREATE statement
INSERT INTO Dogs (name, breed, size)
VALUES (:nameInput, :breedInput, :sizeInput);

-- READ statement
SELECT * FROM Dogs;
SELECT * FROM Dogs WHERE name=:nameInput;

-- UPDATE statement
UPDATE Dogs
SET name=:nameInput, breed=:breedInput, size=:sizeInput
WHERE dogId=(SELECT dogId FROM Dogs WHERE name=:nameInput); -- This criteria needs to be assessed somehow

-- DELETE statement
DELETE FROM Dogs WHERE name=:nameInput;


-- Breeder statements (Shayla) --



-- Dog_Meet statements (Michael) --
-- CREATE statement
INSERT INTO Dog_Meets (name, email, rsvp, breed_specific, size_specific)
VALUES (:nameInput, :emailInput, :rsvpInput, :breed_specific_input, :size_specific_input);

-- READ statement
SELECT * FROM Dog_Meets;
SELECT * FROM Dog_Meets WHERE name=:nameInput;

-- UPDATE statement
UPDATE Dog_Meets
SET name=:nameInput, email=:emailInput, rsvp=:rsvpInput, breed_specific=:breed_specific_input, size_specific=:size_specific_input;
WHERE dmId=(SELECT dmId FROM Dog_Meets WHERE name=:nameInput); -- This criteria needs to be assessed somehow

-- DELETE statement
DELETE FROM Dog_Meets WHERE name=:nameInput;


-- Dog_Walker statements (Michael) --
-- CREATE statement
INSERT INTO Dog_Walkers (name, email, num_spots)
VALUES (:nameInput, :emailInput, :num_spots_input);

-- READ statement
SELECT * FROM Dog_Walkers;
SELECT * FROM Dog_Walkers WHERE name=:nameInput;

-- UPDATE statement
UPDATE Dog_Walkers
SET name=:nameInput, email=:emailInput, num_spots=:num_spots_input
WHERE walkerId=(SELECT walkerId FROM Dog_Walkers WHERE name=:nameInput); -- This criteria needs to be assessed somehow

-- DELETE statement
DELETE FROM Dog_Walkers WHERE name=:nameInput;


-- Owner_Walker statements (Shayla) --



--Owner_Breeder statements (Michael) --
-- need to research more first