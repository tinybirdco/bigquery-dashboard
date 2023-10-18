"use client";

import { Subtitle, Title, Grid, Col } from '@tremor/react';
import PlayerBattingPercentages from './components/playerBattingPercentages';
import TeamBattingPercentages from './components/teamBattingPercentages';
import OpponentBattingPercentages from './components/opponentBattingPercentages';
import BattingPercentageOverTime from './components/battingPercentageOverTime';
import HitsByType from './components/hitsByType'
import React from 'react';

const TB_HOST = process.env.NEXT_PUBLIC_TINYBIRD_HOST;
const TB_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_TOKEN; 

export default function BuildDashboard() {
  let host = TB_HOST;
  let token = TB_TOKEN;

  return (
    <main>
      <Title className = "chart-title">Real-Time Baseball Stats Dashboard</Title>
      <Subtitle className = "chart-subtitle">Built with Tinybird, BigQuery, and Next.js</Subtitle> 
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="mt-6 gap-6">
        <Col numColSpan={1}>
          <PlayerBattingPercentages
            host={host}
            token={token}
          />
        </Col>
        <Col numColSpan={1}>
          <TeamBattingPercentages
            host={host}
            token={token}
          />
        </Col>
        <Col numColSpan={1}>
          <OpponentBattingPercentages
            host={host}
            token={token}
          />
        </Col>
        <Col numColSpan={1} numColSpanSm={2}>
          <BattingPercentageOverTime
            host={host}
            token={token}
          />
        </Col>
        <Col numColSpan={1}>
          <HitsByType
            host={host}
            token={token}
          />
        </Col>
    </Grid>
  </main>
  );
};