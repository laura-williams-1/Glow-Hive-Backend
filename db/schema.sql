DROP DATABASE IF EXISTS glowhive_dev;

CREATE DATABASE glowhive_dev;

\c glowhive_dev;

CREATE TABLE products (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
brand TEXT NOT NULL,
image_url TEXT NOT NULL,
price INT NOT NULL,
details TEXT NOT NULL,
size_in_oz DECIMAL(5, 2) NOT NULL,
type TEXT NOT NULL,
vegan BOOLEAN DEFAULT false,
is_cruelty_free BOOLEAN DEFAULT false,
non_toxic BOOLEAN DEFAULT false,
ingredients TEXT 
);

