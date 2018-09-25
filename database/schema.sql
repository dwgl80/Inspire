DROP DATABASE IF EXISTS inspire;

CREATE DATABASE inspire;

USE inspire;

CREATE TABLE quotes (
  id SERIAL,
  quote VARCHAR(255),
  PRIMARY KEY(id)
);
