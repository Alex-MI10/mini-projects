export default function Output({ bill, tip }) {
  return (
    <h3 className="mb-20">
      You have to pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
