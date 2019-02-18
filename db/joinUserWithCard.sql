select * from cardklout_users cu
join player_cards pc on pc.user_id = cu.id;
