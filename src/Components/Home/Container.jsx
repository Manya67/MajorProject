import React from "react";
import SortButtons from "./SortButtons";
import ListContainer from "./ListContainer";

const buttonData = ["Topics", "Tags", "college", "example", "Topics", "Tags"];
const Container = () => {
  return (
    <div className="min-h-[90%] w-full flex justify-center">
      <div className="w-[85%] flex flex-row border-x-2">
        <div className="w-3/4">
          <div className="h-[10%] flex flex-row justify-start items-center px-2 gap-2 overflow-hidden">
            {buttonData.map((data) => {
              return <SortButtons name={data} />;
            })}
          </div>
          <div className="h-[90%]">
            <ListContainer />
          </div>
        </div>
        <div className="w-1/4 border-l-2">
          <div>College names list </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
