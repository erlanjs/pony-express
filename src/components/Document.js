// Expternal dependencies
import Barcode from "react-barcode";
import React from "react";

// local  dependencies
import logo from "../assets/images/pony-express-logo.png";

export default function Document() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-9 items-center ">
          <div className="flex flex-col  w-full">
            <span>inv</span>
            <span>Распечатана: 29.06.2023 13:42:58</span>
            <span>Накладная (перевозочный документ)</span>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-4xl font-bold whitespace-nowrap">
              28-6821-9409
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <div>
            <Barcode value="28-6821-9409" width={1.5} height={50} />
          </div>
          <div className="flex flex-col w-[200px]">
            <img src={logo} alt="pony-express-logo" className=" " />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className="flex w-[50%]"
            style={{
              borderTop: "3px solid green",
              borderBottom: "3px solid green",
            }}
          >
            <div
              className="bg-red-600 p-3 w-full"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "3px solid green",
              }}
            ></div>
            <div
              className="bg-red-600 p-3 w-full"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "1.5px solid green",
              }}
            ></div>
            <div
              className="bg-red-600 p-3 w-full"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "1.5px solid green",
              }}
            ></div>
            <div
              className="bg-red-600 p-3 w-full"
              style={{
                borderRight: "3px solid green",
                borderLeft: "1.5px solid green",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
