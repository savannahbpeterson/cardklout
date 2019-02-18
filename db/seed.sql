create table cardklout_users(
id serial primary key,
username varchar (100) not null unique,
password varchar(100) not null
);


create table player_cards(
    card_id serial primary key not null,
    brand varchar(60) not null,
    player_name varchar(100) not null,
    sport varchar(100) not null,
    team varchar(100) not null,
    manufacture varchar(100) not null,
    condition varchar(10) not null,
    user_id int references cardklout_users(id) 
);

insert into player_cards(
    brand,
    player_name,
    sport,
    team,
    manufacture,
    condition,
    user_id,
    year
)values(
    'Classics Football',
    'Raymond Berry',
    'Football',
    'Baltimore Colts',
    'Panini',
    'AVERAGE',
    '5',
    '2018'
);