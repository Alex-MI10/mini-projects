import Header from "./Header/Header";
import HeadLine from "./BegginingText/HeadlineAnim";
import Accordion from "./Accordion/Accordion";
import TipCalculator from "./BillCalc/TipCalculator";
import TextExpand from "./Expand/TextExpand";
import ToDoWrapper from "./ToDoApp/TodoWrapper";
import TiltCards from "./Cards/TiltCards";

// data's
import Faqs from "./Accordion/AccordionData";
import DataCards from "./Cards/data";

export default function App() {
  return (
    <div>
      <Header />
      <HeadLine />
      <TiltCards data={DataCards} />
      <Accordion data={Faqs} />
      <TipCalculator />
      <TextExpand />
      <ToDoWrapper />
    </div>
  );
}
