import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FlooPlan = (props) => {
  return ( 
    <div id="FloorPlan">
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full" />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size="Half" />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FlooPlan