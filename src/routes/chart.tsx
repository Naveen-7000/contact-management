import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { getWorldWide } from "../utils/api";
import CountCards from "../components/CountCards";
import CountryMap from "../components/CountryMap";
import LineChart from "../components/LineGraph";
import { useState } from "react";

function Chart() {
  const { isLoading, data: worldData, error } = useQuery("world", getWorldWide);
  const [showMap, setShowMap] = useState(true);

  const handleSwitch = ()=>{
    //  act like a switch
    setShowMap((prev) => !prev);
  }
  return (
    <Layout>
      <div>
        <h1 className=" font-bold text-2xl ">COVID-19 Coronavirus Tracker</h1>
        <div className="w-full flex">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4">
            <CountCards title="Total Cases" data={worldData?.cases} />
            <CountCards title="Active Cases" data={worldData?.active} />
            <CountCards title="Recoverd Cases" data={worldData?.recovered} />
            <CountCards title="Deaths" data={worldData?.deaths} />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 mt-6 w-full">
        <div className="flex flex-row justify-between items-center gap-4">
        <h1 className="text-sm font-bold text-blue-950">Affected Country</h1>
        <button
          onClick={handleSwitch}
          className="font-semibold text-sm rounded-lg p-2 bg-white border-black border"
        >
          {showMap ? "Show Graph" : "Show Map"}
        </button>
        </div>
        {showMap ? <CountryMap /> : <LineChart />}
      </div>
    </Layout>
  );
}

export default Chart;
