"use-client";

import { Card, Title, Subtitle, BarChart, Text, NumberInput, Flex } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import {fetchTinybirdUrl, opponentBattingPercentagesURL } from '../services/tinybird.js'

const OpponentBattingPercentages = ({host, token}) => {
    const [opponent_batting_percentages, setData] = useState([{
        "Team": "",
        "Opponent Batting Percentage": 0,
    }]);

    const [latency, setLatency] = useState(0);
    const [limit, setLimit] = useState(10);

    const valueFormatter = (number) => `${new Intl.NumberFormat("us").format(number).toString()}`;

    let opponent_batting_percentages_url = opponentBattingPercentagesURL(host, token, limit)

    useEffect(() => {
        fetchTinybirdUrl(opponent_batting_percentages_url, setData, setLatency)
    }, [opponent_batting_percentages_url]);

    return (
        <Card>
            <Flex>
                <div className="card-title">
                    <Title>Opponent Batting Percentages</Title>
                    <Subtitle>All Teams</Subtitle>
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
                data={opponent_batting_percentages}
                index="Team"
                categories={["Opponent Batting Percentage"]} 
                className="mt-6" 
                colors={["red"]}
                valueFormatter={valueFormatter}
            />
            <Text>Latency: {latency*1000} ms</Text>
        </Card>
    );
};

export default OpponentBattingPercentages;