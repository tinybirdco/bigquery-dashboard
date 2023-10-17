const playerBattingPercentagesURL = (host, token, limit) =>
    `https://${host}/v0/pipes/player_batting_percentages.json?limit=${limit}&token=${token}`

const fetchTinybirdUrl = async (fetchUrl, setData, setLatency) => {
    const data = await fetch(fetchUrl)
    const jsonData = await data.json();
    setData(jsonData.data);
    setLatency(jsonData.statistics.elapsed)
}

export {
    fetchTinybirdUrl,
    playerBattingPercentagesURL
}