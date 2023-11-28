import Image from "next/image";
import { merriweather } from "@/components/fonts/index.font";
import { pt_sans } from "@/components/fonts/index.font";
export default function Home() {
  return (
    <>
    <div className="grid sm:grid-cols-2 relative mt-8 m-2 gap-2">
        <div className="text-white bg-white/20 flex flex-rows items-center">
         <div className="m-2 space-y-2">
            <p className="text-lg">Hi all. I am </p>
            <h1 className={`${merriweather.className} text-5xl `}>GILBERT FUENTES</h1>
            <h2 className={`${pt_sans.className} text-xl`}> &gt; Full Stack Developer </h2>
         </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/profile.jpg"
            alt="Picture of the author"
            className="rounded-full   p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
