"use client";

import { Card, Text, Subtitle, Title, Flex } from '@tremor/react';
import PlayerBattingPercentages from './components/playerBattingPercentages';
import React, { useState, useEffect } from 'react';

const TB_HOST = process.env.NEXT_PUBLIC_TINYBIRD_HOST;
const TB_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_TOKEN; 

export default function BuildDashboard() {
  let host = TB_HOST;
  let token = TB_TOKEN;

  return (
    <div className = "main grid grid-cols-2 gap-5 sm:gap-10 grid-rows-3-auto">
      <Flex className = "col-span-2">
        <div>
          <Title className = "chart-title">Real-Time Baseball Stats Dashboard</Title>
          <Subtitle className = "chart-subtitle">Built with Tinybird, BigQuery, and Next.js</Subtitle> 
        </div>
      </Flex>
      <PlayerBattingPercentages
        host={host}
        token={token}
      />
    </div>
  );
};