'use client'

import NextLink from "next/link";
import { projects } from "../data";
import CardProjects from "./CardProjects";


const page = () => {
 
  return (
    <div className="text-white ">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 m-2">
        {projects?.map((project, index) => (
         <CardProjects project={project} key={index} index={index} />
          
        ))}
      </div>
    </div>
  );
};

export default page;
