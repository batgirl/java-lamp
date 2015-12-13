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
  answerCode varchar(200),
  answerText varchar(200)
);

CREATE TABLE company_answers (
  id serial primary key,
  question_id integer references questions(id) on delete cascade,
  answer_id integer references answers(id) on delete cascade
);

CREATE TABLE user_answers (
  id serial primary key,
  question_id integer references questions(id) on delete cascade,
  user_id integer references users(id) on delete cascade,
  answer_id integer references answers(id) on delete cascade
);
