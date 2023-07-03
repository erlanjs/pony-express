/* External dependencies */
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

/* Local dependencies */
// import PrintIcon from "../../../svg/PrintIcon";

export default function BasicButtonPrint({ children, textForBtn }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <button
        onClick={handlePrint}
        className="py-3 px-4 font-bold text-white bg-[#148B5A]"
      >
        {textForBtn}
      </button>
      <div className="" style={{ display: "none" }}>
        <div ref={componentRef}>{children}</div>
      </div>
    </>
  );
}
