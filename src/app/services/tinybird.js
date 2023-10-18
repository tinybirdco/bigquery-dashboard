const playerBattingPercentagesURL = (host, token, limit) =>
    `https://${host}/v0/pipes/player_batting_percentages.json?limit=${limit}&token=${token}`

const teamBattingPercentagesURL = (host, token, limit) =>
    `https://${host}/v0/pipes/team_batting_percentages.json?limit=${limit}&token=${token}`

const opponentBattingPercentagesURL = (host, token, limit) =>
    `https://${host}/v0/pipes/opponent_batting_percentages.json?limit=${limit}&token=${token}`

const battingPercentageOverTimeURL = (host, token, team_name) =>
    `https://${host}/v0/pipes/batting_percentage_over_time.json?team_name=${team_name}&token=${token}`

const hitsByTypeURL = (host, token, hit_type) =>
    `https://${host}/v0/pipes/most_hits_by_type.json?hit_type=${hit_type}&token=${token}`

const fetchTinybirdUrl = async (fetchUrl, setData, setLatency) => {
    const data = await fetch(fetchUrl)
    const jsonData = await data.json();
    setData(jsonData.data);
    setLatency(jsonData.statistics.elapsed)
}

export {
    fetchTinybirdUrl,
    playerBattingPercentagesURL,
    teamBattingPercentagesURL,
    opponentBattingPercentagesURL,
    battingPercentageOverTimeURL,
    hitsByTypeURL
}