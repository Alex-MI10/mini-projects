export default function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="spacing-elements">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}
