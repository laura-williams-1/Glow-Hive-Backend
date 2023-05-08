DROP DATABASE IF EXISTS glowhive_dev;

CREATE DATABASE glowhive_dev;

\c glowhive_dev

CREATE TABLE products (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
price INT,
details TEXT NOT NULL,
size TEXT,
type TEXT NOT NULL,
vegan BOOLEAN,
is_cruelty_free BOOLEAN,
non_toxic BOOLEAN,
ingredients TEXT 
);

