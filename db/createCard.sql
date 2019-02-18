insert into player_cards(
    brand,
    player_name,
    sport,
    position,
    team,
    condition,
    user_id,
    year
)(
    ${brand},
    ${player_name},
    ${sport},
    ${position},
    ${team},
    ${condition},
    ${user_id},
    ${year}
)
returning brand, player_name, sport, team, manufacture, condition, user_id, year;