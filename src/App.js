import Header from "./Header/Header";
import HeadLine from "./BegginingText/HeadlineAnim";
import Accordion from "./Accordion/Accordion";
import Data from "./Accordion/AccordionData";
import TipCalculator from "./BillCalc/TipCalculator";
import TextExpand from "./Expand/TextExpand";
import ToDoWrapper from "./ToDoApp/TodoWrapper";

export default function App() {
  return (
    <div>
      <Header />
      <HeadLine />
      <Accordion data={Data} />
      <TipCalculator />
      <TextExpand />
      <ToDoWrapper />
    </div>
  );
}
