import Header from "../components/Header";
import { Overview } from "../components/Overview";
import { Card } from "./Card";
import { mockCompanyDetails } from "../constants/mocks";
import Charty from "../flex";
import { random } from "lodash";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Card>
          <Charty />
        </Card>
      </div>
      <div>
        <Overview
          symbol="Stock"
          price={random(23, 67)}
          change={random(100, -100)}
          changePercent={random(30, 30)}
          currency="USD"
        />
      </div>
    </div>
  );
};

export default Dashboard;
