import { useState } from "react";
import Reset from "./Reset";
import Output from "./Output";
import SelectPercentage from "./SelectPercentage";
import BillInput from "./BillInput";
import "./style.scss";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage1(1);
  }

  return (
    <div className="tip-calculator">
      <div className="tip-calculator__title">Tip Calculator</div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like it?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}