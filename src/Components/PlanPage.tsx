import { useState } from "react";
import background from "../assets/background_planspage.jpg";
import minutes from "../data/Documents";
import documentIcon from "../assets/Document_image.jpg";

export default function PlanPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  return (
    <div className="text-[#333] min-h-screen bg-cover z-10 p-4 font-robo" style={{backgroundImage : `url(${background})`}} >
      <div className="m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <ul className="flex space-x-4 pt-32 ">
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS207</li>
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 1 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(1)}>IS208</li>
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 2 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(2)}>IS216</li>
        </ul>
        <h1 className="pt-4 text-center text-3xl font-medium">Biên cuộc bản họp</h1>
      </div>
      <div className="m-auto h-1/4 w-1/4">
        {
          <div>
            <div className="bg-[#f0f0f0] shadow-md rounded-md p-4 animate-fadeUp">
              <a href={`${minutes[chooseCourse]}`} target="_blank" className="mt-auto">
                <img src={documentIcon} alt="Document"  className="h-3/4 m-auto"/>
                <p className="text-center text-xl mt-4">Biên bản họp nhóm</p> 
              </a>
            </div>
          </div>
        }
      </div >
    </div>
  )
}
