"use-client";

import { Card, Title, Subtitle, AreaChart, Text, SearchSelect, SearchSelectItem, Flex } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import {fetchTinybirdUrl, battingPercentageOverTimeURL } from '../services/tinybird.js'

const BattingPercentageOverTime = ({host, token}) => {
    const [batting_percentage_over_time, setData] = useState([{
        "Team": "",
        "Game Date": "",
        "Batting Percentage": 0,
    }]);

    const [latency, setLatency] = useState(0);
    const [team_name, setTeamName] = useState('BOS');

    const valueFormatter = (number) => `${new Intl.NumberFormat("us").format(number).toString()}`;

    let batting_percentage_over_time_url = battingPercentageOverTimeURL(host, token, team_name)

    useEffect(() => {
        fetchTinybirdUrl(batting_percentage_over_time_url, setData, setLatency)
    }, [batting_percentage_over_time_url]);

    return (
        <Card>
            <Flex>
                <div className="card-title">
                    <Title>Batting Percentages Over Time</Title>
                    <Subtitle>By Team</Subtitle>
                </div>
                <div className="chart-input">
                    <Text>Team</Text>
                    <SearchSelect
                        className="text-input"
                        defaultValue="BOS"
                        onValueChange={(value) => setTeamName(value)}
                    >
                        <SearchSelectItem value="AZ">AZ</SearchSelectItem>
                        <SearchSelectItem value="ATL">ATL</SearchSelectItem>
                        <SearchSelectItem value="BAL">BAL</SearchSelectItem>
                        <SearchSelectItem value="BOS">BOS</SearchSelectItem>
                        <SearchSelectItem value="BKN">BKN</SearchSelectItem>
                        <SearchSelectItem value="CAL">CAL</SearchSelectItem>
                        <SearchSelectItem value="CHC">CHC</SearchSelectItem>
                        <SearchSelectItem value="CHI">CHI</SearchSelectItem>
                        <SearchSelectItem value="CIN">CIN</SearchSelectItem>
                        <SearchSelectItem value="CLE">CLE</SearchSelectItem>
                        <SearchSelectItem value="COL">COL</SearchSelectItem>
                        <SearchSelectItem value="DET">DET</SearchSelectItem>
                        <SearchSelectItem value="FLA">FLA</SearchSelectItem>
                        <SearchSelectItem value="HOU">HOU</SearchSelectItem>
                        <SearchSelectItem value="KC">KC</SearchSelectItem>
                        <SearchSelectItem value="LAA">LAA</SearchSelectItem>
                        <SearchSelectItem value="LAD">LAD</SearchSelectItem>
                        <SearchSelectItem value="MIA">MIA</SearchSelectItem>
                        <SearchSelectItem value="MIL">MIL</SearchSelectItem>
                        <SearchSelectItem value="MIN">MIN</SearchSelectItem>
                        <SearchSelectItem value="MTL">MTL</SearchSelectItem>
                        <SearchSelectItem value="NYM">NYM</SearchSelectItem>
                        <SearchSelectItem value="NYY">NYY</SearchSelectItem>
                        <SearchSelectItem value="OAK">OAK</SearchSelectItem>
                        <SearchSelectItem value="PHI">PHI</SearchSelectItem>
                        <SearchSelectItem value="PIT">PIT</SearchSelectItem>
                        <SearchSelectItem value="SD">SD</SearchSelectItem>
                        <SearchSelectItem value="SEA">SEA</SearchSelectItem>  
                        <SearchSelectItem value="SF">SF</SearchSelectItem>
                        <SearchSelectItem value="TB">TB</SearchSelectItem>
                        <SearchSelectItem value="TEX">TEX</SearchSelectItem> 
                        <SearchSelectItem value="TOR">TOR</SearchSelectItem> 
                        <SearchSelectItem value="WSH">WSH</SearchSelectItem>  
                    </SearchSelect>
                </div>
            </Flex>
            
            <AreaChart 
                data={batting_percentage_over_time}
                index="Game Date"
                categories={["Batting Percentage"]} 
                className="mt-6" 
                colors={["yellow"]}
                valueFormatter={valueFormatter}
            />
            <Text>Latency: {latency*1000} ms</Text>
        </Card>
    );
};

export default BattingPercentageOverTime;