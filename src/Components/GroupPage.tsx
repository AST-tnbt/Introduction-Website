import { useState } from "react";
import groups from "../data/Members";

export default function GroupPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  return (
    <div className="p-8 text-[#333] max-w-screen-sm flex flex-col m-auto lg:max-w-screen-lg md:max-w-screen-md select-none">
      <ul className="flex space-x-4 mt-4 pt-24 ">
        <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS208</li>
        <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "" : "border-b-4 border-[#ff6b1e]"}`} onClick={() => setChooseCourse(1)}>IS216</li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl">
           Môn học: {groups[chooseCourse].course}
        </h2>
        <div className="grid grid-cols-2 mt-6 p-6">
          {groups[chooseCourse].member.map( mem =>
            (
            <div className="p-6 text-center shadow-md m-4 rounded-sm lg:m-10 ">
              <img src={mem.img} alt="" />
              <h3 className="mt-4 text-xl font-normal">{mem.name}</h3>
              <h3 className="text-lg font-light">{mem.id}</h3>
              <h3 className="text-lg font-light">{mem.role}</h3>
            </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
