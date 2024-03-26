import { useState } from "react";
import background from "../assets/background_planspage.jpg";

export default function PlanPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  return (
    <div className="text-[#333] h-screen bg-cover z-10 " style={{backgroundImage : `url(${background})`}} >
      <div className="m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <ul className="flex space-x-4 pt-32 ">
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS208</li>
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "" : "border-b-4 border-[#ff6b1e]"}`} onClick={() => setChooseCourse(1)}>IS216</li>
        </ul>
        <h1 className="pt-4 text-center text-3xl font-medium">Biên bản họp và phân công</h1>
      </div>
    </div>
  )
}
