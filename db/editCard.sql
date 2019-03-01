update player_cards
set  brand = ${brand}, 
    player_name = ${player_name},  
    sport = ${sport}, 
    position = ${position}, 
    team = ${team}, 
    condition = ${condition}, 
    user_id = ${user_id}, 
    year = ${year}, 
    front_url = ${front_url}, 
    back_url = ${back_url}
where card_id = ${card_id}
    returning *  