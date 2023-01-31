-- psql ark_db_dev -f seed.sql


INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ('Megalosaurus', 'Megamind', 'Male', 5707.3, 1230.0, 504.0, 316.0);
INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ('Rock Drake', 'Weight Jake', 'Male', 7853.7, 1209.4, 2101.2, 316.3);
INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ('Glowtail', 'Glowy', 'Female', 960.6, 530.0, 129.9, 413.6);
INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ('Shadowmane', 'Mangy Gaurd', 'Male', 33237.0, 2227.5, 852.0, 422.2);
INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ('Bulbdog', 'Mangy', 'Female', 1097.8, 2303.5, 235.1, 402.7);

SELECT * FROM dinos;

