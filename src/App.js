// Local dependencies
import { useState } from "react";
import "./App.css";
import Document from "./components/Document";
import BasicButtonPrint from "./components/PrintButton";

function App() {
  const [data, setData] = useState({});

  return (
    <div className=" py-6">
      <div className="container-box">
        <Document
          data={data}
          setData={setData}
          type="ОРИГИНАЛ PONY EXPRESS"
          disabled={false}
        />
        <Document
          data={data}
          setData={setData}
          type="КОПИЯ ОТПРАВИТЕЛЯ"
          disabled={true}
        />
        <Document
          data={data}
          setData={setData}
          type="КОПИЯ PONY EXPRESS"
          disabled={true}
        />
        <Document
          data={data}
          setData={setData}
          type="КОПИЯ ПОЛУЧАТЕЛЯ"
          disabled={true}
        />
      </div>
      <div className=" fixed bottom-[30px]  right-[40px]">
        <BasicButtonPrint textForBtn={"Печать"}>
          <div className="container-print">
            <Document
              data={data}
              setData={setData}
              type="ОРИГИНАЛ PONY EXPRESS"
              disabled={false}
            />
            <Document
              data={data}
              setData={setData}
              type="КОПИЯ ОТПРАВИТЕЛЯ"
              disabled={true}
            />
            <Document
              data={data}
              setData={setData}
              type="КОПИЯ PONY EXPRESS"
              disabled={true}
            />
            <Document
              data={data}
              setData={setData}
              type="КОПИЯ ПОЛУЧАТЕЛЯ"
              disabled={true}
            />
          </div>
        </BasicButtonPrint>
      </div>
    </div>
  );
}

export default App;
