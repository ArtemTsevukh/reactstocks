import { Card } from "../grid/Card";
import { COMPARE_CHART_OPTIONS } from "../helpers/constants";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generateChartData } from "../constants/mocks";

export const PerfomanceKill = () => {
  const [chartSource, setChartSource] = useState("sessions");
  const handleChartSourceChange = (event: SelectChangeEvent<string>) =>
    setChartSource(event.target.value);
  const [data, setData] = useState(generateChartData);

  return (
    <Card>
      <div className="xl:px-32">
        <h1 className="text-5xl">Compare MSFT and SPY</h1>
      </div>
      <Box display="flex" p={3.5}>
        <Box width="20%">
          <Select
            value={chartSource}
            onChange={handleChartSourceChange}
            fullWidth
          >
            {COMPARE_CHART_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <div className="flex">
        <AreaChart
          width={730}
          height={250}
          // @ts-ignore
          data={data.lineChart[chartSource] || []}
          key={chartSource}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="comparison"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </Card>
  );
};
