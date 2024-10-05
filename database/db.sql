CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*
INSERT INTO users (name, email) VALUES ('John Doe','John@gmail.com'),('Maria Doe','Maria@gmail.com');
*/

SELECT * FROM users;

