create database task;

create table users(
    id serial primary key not null,
    name text not null,
    email varchar(64) not null unique,
    password varchar(64) not null
);


CREATE TABLE admin(
    id serial not null primary key,
    email varchar(64) not null,
    password text not null
);