select * from player_cards
where user_id = ${id}
order by card_id desc;