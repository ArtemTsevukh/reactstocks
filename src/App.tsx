import { Route, Routes } from "react-router-dom";
import { Overview } from "./components/Overview";
import { PerfomanceKill } from "./pages/Perfomance";
import "./index.css";
import Dashboard from "./grid/Dashboard";
import { Navigation } from "./components/Navigation";
import StockContext from "./context/StockContext";
import { useState } from "react";

export function App() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<PerfomanceKill />} />
        </Routes>
      </StockContext.Provider>
    </>
  );
}

export default App;
