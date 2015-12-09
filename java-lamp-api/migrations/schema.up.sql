CREATE TABLE users (
  id serial primary key,
  name varchar(60),
  email varchar(60),
  password varchar(60),
  token varchar(200) 
);

CREATE TABLE questions (
  id serial primary key,
  question varchar(200),
  test varchar(1000)
);

CREATE TABLE answers (
  id serial primary key,
  answer varchar(200),
  description varchar(200)
);