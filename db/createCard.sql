insert into player_cards(
    brand,
    player_name,
    sport,
    position,
    team,
    condition,
    user_id,
    year,
    front_url,
    back_url
)values(
    ${brand}, 
    ${player_name},
    ${sport},
    ${position},
    ${team},
    ${condition},
    ${user_id},
    ${year},
    ${front_url},
    ${back_url}
)
returning brand, player_name, sport, team, condition, user_id, year;