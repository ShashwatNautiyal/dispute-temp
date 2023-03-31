import type { FlowComponent } from "solid-js";
import { Motion } from "@motionone/solid";

const AppBar: FlowComponent = (props) => (
  <Motion.div
    class="h-full z-10 border-r border-[#EDEDEF] bg-white w-[64px] overflow-hidden hover:overflow-auto flex flex-col gap-[8px] py-[8px] pr-[10px] bg-grey-200 flex-shrink-0"
    initial={{ x: "-100%" }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}  
  >
    {props.children}
  </Motion.div>
);

export default AppBar;

