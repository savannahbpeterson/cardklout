insert into cardklout_users(username, password)
values(${user}, ${pass})
returning username;