-- psql ark_db_dev -f seed.sql

INSERT INTO dino_types (type) VALUES ('Megalosaurus');
INSERT INTO dino_types (type) VALUES ('Rock Drake');
INSERT INTO dino_types (type) VALUES ('Glowtail');
INSERT INTO dino_types (type) VALUES ('Shadowmane');
INSERT INTO dino_types (type) VALUES ('Bulbdog');

INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES (1, 'Megamind', 'Male', 5707.3, 1230.0, 504.0, 316.0);
INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES (2, 'Weight Jake', 'Male', 7853.7, 1209.4, 2101.2, 316.3);
INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES (3, 'Glowy', 'Female', 960.6, 530.0, 129.9, 413.6);
INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES (4, 'Mangy Gaurd', 'Male', 33237.0, 2227.5, 852.0, 422.2);
INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES (5, 'Mangy', 'Female', 1097.8, 2303.5, 235.1, 402.7);

SELECT * FROM dino_types;
SELECT * FROM dinos;

