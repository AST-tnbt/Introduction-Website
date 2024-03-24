import { useState } from "react"
import projects from "../data/Project";

export default function ProjectPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  return (
    <div className="bg-[#f0f0f0] h-screen  text-[#333]">
      <div className=" m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ">
        <ul className="flex space-x-4 pt-32 ">
            <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS208</li>
            <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "" : "border-b-4 border-[#ff6b1e]"}`} onClick={() => setChooseCourse(1)}>IS216</li>
        </ul>
        <h1 className="text-center text-4xl font-semibold pt-6">Đồ án</h1>
        <h2 className="text-center text-3xl font-normal mt-4">{projects[chooseCourse].name}</h2>
        <h2 className="text-xl font-normal mt-4">Môn học: {projects[chooseCourse].course}</h2>
        <p className="text-lg font-normal mt-2">Đề tài: {projects[chooseCourse].topic}</p>
        <a className="bg-black p-2 mt-4 block w-fit rounded-md text-white font-medium transition-colors hover:bg-[#f77a36] hover:text-[#333] " href={projects[chooseCourse].source} >Đi đến GitHub</a>
        <div className="bg-[#f77a36] h-2 mt-8"></div>
        <h2 className="text-xl mt-4">Demo - Hướng dẫn sử dụng</h2>
        <p className="text-lg mt-2">(Chưa cập nhật)</p>
      </div>
    </div>
  )
}
