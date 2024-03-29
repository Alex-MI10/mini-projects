export default function BillInput({ bill, onSetBill }) {
  return (
    <div className="spacing-elements">
      <label>How much was the bill</label>
      <input
        className="pl-5"
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
