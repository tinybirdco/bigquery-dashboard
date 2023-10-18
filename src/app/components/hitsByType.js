"use-client";

import { Card, Title, Subtitle, BarList, Text, Select, SelectItem, Flex } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import {fetchTinybirdUrl, hitsByTypeURL } from '../services/tinybird.js'

const HitsByType = ({host, token}) => {
    const [hits_by_type, setData] = useState([{
        "Player": "",
        "Total": 0,
    }]);

    const [latency, setLatency] = useState(0);
    const [hit_type, setHitType] = useState('stat_hits');

    const valueFormatter = (number) => `${new Intl.NumberFormat("us").format(number).toString()}`;

    let hits_by_type_url = hitsByTypeURL(host, token, hit_type)

    useEffect(() => {
        fetchTinybirdUrl(hits_by_type_url, setData, setLatency)
    }, [hits_by_type_url]);

    return (
        <Card>
            <Flex>
                <div className="card-title">
                    <Title>Top Hitters</Title>
                    <Subtitle>By Hit Type</Subtitle>
                </div>
                <div className="chart-input">
                    <Text>Hit Type</Text>
                    <Select
                        className="text-input"
                        defaultValue="stat_hits"
                        onValueChange={(value) => setHitType(value)}
                    >
                        <SelectItem value="stat_hits">All Hits</SelectItem>
                        <SelectItem value="stat_singles">Singles</SelectItem>
                        <SelectItem value="stat_doubles">Doubles</SelectItem>
                        <SelectItem value="stat_triples">Triples</SelectItem> 
                        <SelectItem value="stat_homeruns">Home Runs</SelectItem>
                    </Select>
                </div>
            </Flex>
            
            <BarList 
                data={hits_by_type}
                className="mt-6" 
                colors={["purple"]}
                valueFormatter={valueFormatter}
            />
            <Text>Latency: {latency*1000} ms</Text>
        </Card>
    );
};

export default HitsByType;