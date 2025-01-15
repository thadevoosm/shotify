import Image from "next/image";
import { BackgroundGradientAnimationDemo } from "./components/animation";
import { GlobeDemo } from "./components/globeComponent";
import { NavbarDemo } from "./components/navBar";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <BackgroundGradientAnimationDemo />
       {/* <GlobeDemo />  */}
    </div>
  );
}
