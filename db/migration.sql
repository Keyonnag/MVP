DROP TABLE IF EXISTS dinos CASCADE;

CREATE TABLE dinos(
   dino_id INT GENERATED ALWAYS AS IDENTITY,
   type VARCHAR(255) NOT NULL,
   name VARCHAR(255) NOT NULL,
   gender VARCHAR(15) NOT NULL,
   health INT,
   stamina INT,
   weight INT,
   melee INT,
   PRIMARY KEY(dino_id)
);

-- psql ark_db_dev -f migration.sql