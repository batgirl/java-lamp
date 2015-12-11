CREATE TABLE users (
  id serial primary key,
  name varchar(60),
  email varchar(60),
  password varchar(60),
  token varchar(200) 
);

CREATE TABLE questions (
  id serial primary key,
  title varchar(200),
  questionText varchar(1000),
  sampleCode varchar(1000),
  test varchar(1000)
);

CREATE TABLE answers (
  id serial primary key,
  answer varchar(200),
  description varchar(200)
);