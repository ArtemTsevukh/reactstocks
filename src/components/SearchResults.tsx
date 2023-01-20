import React, { useContext } from "react";
import StockContext from "../context/StockContext";

interface SearchResultsProps {
  results: any;
}

const SearchResults = ({ results }: SearchResultsProps) => {
  const { setStockSymbol } = useContext(StockContext);
  sessionStorage.getItem(setStockSymbol);
  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar">
      {results.map(
        (item: {
          symbol: string;
          description:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => {
          return (
            
            <li
              className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
              onClick={() => setStockSymbol(item.symbol)}
            >
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default SearchResults;
