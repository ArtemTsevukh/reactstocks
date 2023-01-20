import { useState } from "react";
import {
  Area,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { generateChartData } from "./constants/mocks";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { COMPARE_CHART_OPTIONS } from "./helpers/constants";

const Charty = () => {
  const [chartSource, setChartSource] = useState("sessions");
  const handleChartSourceChange = (event: SelectChangeEvent<string>) =>
    setChartSource(event.target.value);
  const [data, setData] = useState(generateChartData);
  return (
    <>
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
          data={data.stockChart[chartSource]}
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
    </>
  );
};

export default Charty;
