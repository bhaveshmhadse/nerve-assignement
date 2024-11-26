import Image from "next/image";
import { useState, useEffect } from "react";
import { formatDate } from "@/utils/util";
import { data } from "../public/data.json";

const Home = ({}) => {
  let [views, setViews] = useState([]);
  let [selectedDate, setSelectedDate] = useState();
  let [cacheStrategy, setCacheStrategy] = useState({});
  let [dateArray, setDateArray] = useState(data.dateArray);
  let [selectedView, setSelectedView] = useState("Bullish");
  let [strategyArray, setStrategyArray] = useState(data.strategyArray);
  let [showDateSelectionContainer, setShowDateSelectionContainer] = useState(false);

  const handleViewChange = (view) => setSelectedView(view);
  const toggleDateSelectionContainer = () => setShowDateSelectionContainer(!showDateSelectionContainer);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleStrategyChange();
    setShowDateSelectionContainer(false);
  };

  const handleStrategyChange = () => {
    // Strategy is alreeady present in cached data
    if (selectedDate in cacheStrategy && selectedView in cacheStrategy[selectedDate]) return;

    let obj = {};
    for (let object of strategyArray) {
      if (object.View == selectedView && selectedDate in object.Value) {
        for (let strategies of object.Value[selectedDate]) {
          if (!(strategies in obj)) obj[strategies] = 0;
          obj[strategies] += 1;
        }
        break;
      }
    }
    if (Object.keys(obj).length) setCacheStrategy((prev) => ({ ...prev, [selectedDate]: { ...prev[selectedDate], [selectedView]: obj } }));
  };

  useEffect(() => {
    setSelectedDate(dateArray[0]);
    setViews(strategyArray.map((eachObject) => eachObject?.View));
  }, []);

  useEffect(() => {
    handleStrategyChange();
  }, [selectedDate, selectedView]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-gray-800  text-xs lg:text-lg">
      <div className="lg:w-3/4 w-11/12 border-2 lg:border-gray-300 border-gray-100 rounded-2xl h-auto flex items-center justify-center p-2">
        <div className="w-full h-auto">
          <div className="w-full h-auto items-center justify-center block px-2">
            <Views views={views} selectedView={selectedView} handleViewChange={handleViewChange} />
            <DateSelector dateArray={dateArray} selectedDate={selectedDate} handleDateChange={handleDateChange} showDateSelectionContainer={showDateSelectionContainer} toggleDateSelectionContainer={toggleDateSelectionContainer} />
            <StrategyList selectedDate={selectedDate} selectedView={selectedView} cacheStrategy={cacheStrategy} showDateSelectionContainer={showDateSelectionContainer} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Views = ({ views, handleViewChange, selectedView }) => {
  return (
    <div className="w-full h-auto items-center justify-between flex lg:px-2 bg-gray-100 rounded-2xl mb-5">
      {views.map((view) => (
        <button key={view} onClick={() => handleViewChange(view)} className={`w-1/4 mx-1 px-2 py-2 border-transparent font-black rounded-2xl border-2 delay-50 ${selectedView == view ? "text-white bg-indigo-500" : "hover:text-gray-500 hover:bg-indigo-100"}  text-gray-600`}>
          {view}
        </button>
      ))}
    </div>
  );
};

const DateSelector = ({ dateArray, selectedDate, handleDateChange, showDateSelectionContainer, toggleDateSelectionContainer }) => {
  return (
    <>
      <div className="w-full flex px-2 py-3 font-black bg-white rounded-2xl border-2 lg:border-gray-300 border-gray-100 select-none">
        <div onClick={toggleDateSelectionContainer} className="w-full">
          {formatDate(selectedDate)}
        </div>
        <div className="w-auto font-black">{showDateSelectionContainer ? <Image src="/up.png" width={16} height={300} /> : <Image src="/down.png" width={16} height={300} />}</div>
      </div>
      {showDateSelectionContainer && (
        <div className="px-4 mt-2 ">
          {dateArray.map((date) => (
            <div onClick={() => handleDateChange(date)} className="w-full px-2 py-3 my-1 font-black bg-white rounded-2xl border-2 lg:border-gray-300 border-gray-100 select-none">
              {formatDate(date)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const StrategyList = ({ selectedDate, selectedView, cacheStrategy, showDateSelectionContainer }) => {
  // if there is entry present in startegyArray then render this
  if (cacheStrategy?.[selectedDate]?.[selectedView]) {
    return (
      <div className="py-5">
        {Object.entries(cacheStrategy[selectedDate][selectedView]).map((eachStrategy) => (
          <div className="w-full items-center justify-center text-start px-2 flex py-3 my-1 font-black bg-white rounded-2xl border-2 lg:border-gray-300 border-gray-100">
            <div className="lg:w-full w-1/2">{eachStrategy[0]}</div>
            <div className="lg:w-1/6 w-1/2 text-gray-500 flex justify-end items-center text-center">
              <span>•&nbsp;</span>
              <span>{eachStrategy[1]} Strateg</span>
              {parseInt(eachStrategy[1]) > 1 ? "ies" : "y"}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // if no strategy is present for given date and view render this
  if (!showDateSelectionContainer) {
    return (
      <div className="w-full py-5 font-black text-center">
        <div className="text-gray-400">There are no strategies for</div>
        <div>{formatDate(selectedDate)}</div>
      </div>
    );
  }
};

export default Home;
