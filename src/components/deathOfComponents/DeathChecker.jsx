import React from "react";
import { useEffect, useState } from "react";

export const DeathChecker = () => {
  const [data, setData] = useState(5);

  console.log("render");

  useEffect(() => {
    console.log("юзэффект");
    return () => {
      console.log("return");
    };
  }, [data]);

  //   return (
  //     <>
  //       {data === 5 && <div>50</div>}
  //       {data === 6 && <span>60</span>}
  //       {data}
  //       <button
  //         onClick={() => {
  //           setData(6);
  //         }}
  //       >
  //         +
  //       </button>
  //     </>
  //   );

  if (data === 5) {
    return (
      <div>
        50
        <button
          onClick={() => {
            setData(6);
          }}
        >
          +
        </button>
      </div>
    );
  }

  if (data === 6) {
    return <span>60</span>;
  }
};
