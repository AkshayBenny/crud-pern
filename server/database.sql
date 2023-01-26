CREATE DATABASE perntodo

CREATE TABLE todo{
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
}


-- sudo -u postgres psql

--  \l  >list all databases
--  \c perntodo >connect to database
--  \dt >list all tables
--  \d todo >describe table


--  sudo su - postgres 