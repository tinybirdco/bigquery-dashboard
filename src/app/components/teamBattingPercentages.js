"use-client";

import { Card, Title, Subtitle, BarChart, Text, NumberInput, Flex } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import {fetchTinybirdUrl, teamBattingPercentagesURL } from '../services/tinybird.js'

const TeamBattingPercentages = ({host, token}) => {
    const [team_batting_percentages, setData] = useState([{
        "Team": "",
        "Batting Percentage": 0,
    }]);

    const [latency, setLatency] = useState(0);
    const [limit, setLimit] = useState(10);

    const valueFormatter = (number) => `${new Intl.NumberFormat("us").format(number).toString()}`;

    let team_batting_percentages_url = teamBattingPercentagesURL(host, token, limit)

    useEffect(() => {
        fetchTinybirdUrl(team_batting_percentages_url, setData, setLatency)
    }, [team_batting_percentages_url]);

    return (
        <Card>
            <Flex>
                <div className="card-title">
                    <Title>Team Batting Percentages</Title>
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
                data={team_batting_percentages}
                index="Team"
                categories={["Batting Percentage"]} 
                className="mt-6" 
                colors={["green"]}
                valueFormatter={valueFormatter}
            />
            <Text>Latency: {latency*1000} ms</Text>
        </Card>
    );
};

export default TeamBattingPercentages;