import Header from "./BeginningText/StartText";
import Accordion from "./Accordion/Accordion";
import Data from "./Accordion/AccordionData";
import TipCalculator from "./BillCalc/TipCalculator";
import TextExpand from "./Expand/TextExpand";

export default function App() {
  return (
    <div>
      <Header />
      <Accordion data={Data} />
      <TipCalculator />
      <TextExpand />
    </div>
  );
}
