'use client'
import { TypeAnimation } from "react-type-animation";

const NameAnimated = () => {
  return <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed out once, initially
    "Full Stack Developer ",
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    "Front End Developer ",
    1000,
    "Back End Developer ",
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
}

export default NameAnimated
