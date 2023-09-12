import "./clock.css";
function Clock() {
  const data = new Date();
  return (
    <div>
      <h1>Hello,I am clock</h1>
      <h2>Now is {data.toLocaleTimeString()}</h2>
    </div>
  );
}
export default Clock;
