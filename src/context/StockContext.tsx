import { createContext } from "react";

interface IStockContext {
  setStockSymbol: any;
  stockSymbol: any;
}

const StockContext = createContext<IStockContext | any>(null);

export default StockContext;
