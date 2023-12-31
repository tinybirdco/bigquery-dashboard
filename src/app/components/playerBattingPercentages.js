"use-client";

import { Card, Title, Subtitle, BarChart, Text, NumberInput, Flex } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import {fetchTinybirdUrl, playerBattingPercentagesURL } from '../services/tinybird.js'

const PlayerBattingPercentages = ({host, token}) => {
    const [player_batting_percentages, setData] = useState([{
        "Player Name": "",
        "Batting Percentage": 0,
    }]);

    const [latency, setLatency] = useState(0);
    const [limit, setLimit] = useState(10);

    const valueFormatter = (number) => `${new Intl.NumberFormat("us").format(number).toString()}`;

    let player_batting_percentages_url = playerBattingPercentagesURL(host, token, limit)

    useEffect(() => {
        fetchTinybirdUrl(player_batting_percentages_url, setData, setLatency)
    }, [player_batting_percentages_url]);

    return (
        <Card>
            <Flex>
                <div className="card-title">
                    <Title>Player Batting Percentages</Title>
                    <Subtitle>All Players</Subtitle>
                </div>
                <div className="chart-input">
                    <Text># of Results</Text>
                    <NumberInput
                        className="number-input"
                        defaultValue="10"
                        onValueChange={(value) => setLimit(value)}
                    />
                </div>
            </Flex>
            
            <BarChart 
                data={player_batting_percentages}
                index="Player Name"
                categories={["Batting Percentage"]} 
                className="mt-6" 
                colors={["blue"]}
                valueFormatter={valueFormatter}
            />
            <Text>Latency: {latency*1000} ms</Text>
        </Card>
    );
};

export default PlayerBattingPercentages;