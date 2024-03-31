import { useState } from "react";
import background from "../assets/background_planspage.jpg";
import { Link } from "react-router-dom";
import minutes from "../data/Documents";
import documentIcon from "../assets/Document_image.jpg";

export default function PlanPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="text-[#333] min-h-screen bg-cover z-10 p-4 font-robo" style={{backgroundImage : `url(${background})`}} >
      <div className="m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <ul className="flex space-x-4 pt-32 ">
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS208</li>
              <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "" : "border-b-4 border-[#ff6b1e]"}`} onClick={() => setChooseCourse(1)}>IS216</li>
        </ul>
        <h1 className="pt-4 text-center text-3xl font-medium">Biên cuộc bản họp</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-2 mt-8">
        {
          minutes.map(minute => 
            (
              <div className="bg-[#f0f0f0] shadow-md rounded-md">
                <Link to={`/plans/${minute.id}`} onClick = {() => scrollToTop()}>
                  <img src={documentIcon} alt="Document"  className="h-3/4 m-4"/>
                  <h2 className="text-center text-xl">{minute.name}</h2>
                </Link>
              </div>
            ))
        }
      </div>
      
    </div>
  )
}
