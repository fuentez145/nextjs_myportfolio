'use client'
import { TypeAnimation } from "react-type-animation";

const NameAnimated = () => {
  return <TypeAnimation
  sequence={[
   
    "Full Stack Developer",
    1000, 
    "Front End Developer",
    1000,
    "Back End Developer",
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
}

export default NameAnimated
