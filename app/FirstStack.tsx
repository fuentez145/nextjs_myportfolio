import Image from "next/image";
import { merriweather } from "@/components/fonts/index.font";
import { pt_sans } from "@/components/fonts/index.font";
import NameAnimated from "@/components/ui/NameAnimated";

const FirstStack = () => {
  return (
    <>
      <div className="flex flex-col flex-col-reverse sm:grid sm:grid-cols-2 relative mt-8 m-2 gap-2">
        <div className="text-white bg-white/20 flex flex-rows items-center">
          <div className="m-2 space-y-2">
            <p className="text-lg">Hi all. I am </p>
            <h1 className={`${merriweather.className} text-3xl  sm:text-5xl `}>
              GILBERT FUENTES
            </h1>
            <h2 className={`${pt_sans.className} text-xl`}>
              {" "}
              &gt;{" "}
               <NameAnimated />
            </h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/profile.jpg"
            alt="Picture of the author"
            className="rounded-full    p-2 bg-gradient-to-tr from-black via-slate-500 to-white"
            width={500}
            height={500}
          />
          {/* <div className="absolute top-20 left-10">
          <h2 className="text-white">Testing</h2>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FirstStack;
