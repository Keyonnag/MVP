DROP TABLE IF EXISTS dino_types CASCADE;
DROP TABLE IF EXISTS dinos CASCADE;

CREATE TABLE dino_types(
   dino_type_id INT GENERATED ALWAYS AS IDENTITY,
   type VARCHAR(255) NOT NULL,
   PRIMARY KEY(dino_type_id)
);


CREATE TABLE dinos(
   dino_id INT GENERATED ALWAYS AS IDENTITY,
   dino_type_id INT,
   name VARCHAR(255) NOT NULL,
   gender VARCHAR(15),
   health int,
   stamina int,
   weight int,
   melee int,
   PRIMARY KEY (dino_id),
   CONSTRAINT fk_dino_type
      FOREIGN KEY(dino_type_id)
	  REFERENCES dino_types(dino_type_id)
);

-- psql ark_db_dev -f migration.sql