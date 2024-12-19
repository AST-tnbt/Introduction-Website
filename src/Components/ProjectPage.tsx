import { useState } from "react"
import projects from "../data/Project";
import "video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle } from "video-react";

export default function ProjectPage() {
  const [chooseCourse, setChooseCourse] = useState(0);
  return (
    <div className="bg-[#f0f0f0] min-h-screen p-4 text-[#333] z-10">
      <div className=" m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ">
        <ul className="flex space-x-4 pt-32 ">
            <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 0 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(0)}>IS207</li>
            <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 1 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(1)}>IS208</li>
            <li className={`cursor-pointer block text-xl font-medium transition-transform hover:-translate-y-1 ${chooseCourse == 2 ? "border-b-4 border-[#ff6b1e]" : ""}`} onClick={() => setChooseCourse(2)}>IS216</li>
        </ul>
        <h1 className="text-center text-4xl font-semibold pt-6">Đồ án</h1>
        <h2 className="text-center text-3xl font-normal mt-4">{projects[chooseCourse].name}</h2>
        <h2 className="text-xl font-normal mt-4">Môn học: {projects[chooseCourse].course}</h2>
        <p className="text-lg font-normal mt-2">Đề tài: {projects[chooseCourse].topic}</p>
        <a className="bg-black p-2 mt-4 block w-fit rounded-md text-white font-medium transition-colors hover:bg-[#f77a36] hover:text-[#333] " href={projects[chooseCourse].source} target="_blank" >Đi đến GitHub</a>
        <div className="bg-[#f77a36] h-2 mt-8"></div>
        <h2 className="text-2xl mt-4 font-medium">Demo - Screenshots</h2>
        <p className="text-lg mt-2">Dưới đây là một số hình ảnh về giao diện của sản phẩm:</p>
        {projects[chooseCourse].video ? 
        ( <Player autoPlay src={projects[chooseCourse].video} >
            <ControlBar autoHide={true} disableDefaultControls={false}>
              <PlayToggle />
            </ControlBar>
        </Player>) : null}
        <div className="mb-6">
          {projects[chooseCourse].image?.map((img, index) => (
            <img key={index} src={img} className=" border-[2px] border-slate-800 mt-6 m-auto"/>
          ))}
        </div>
      </div>
      <div className="bg-white fixed w-full h-full z-40 top-0 left-0 animate-fadeOut invisible items-center flex">
        <h2 className="text-[#f77a36] outline-black m-auto text-6xl font-black animate-slide invisible text-center">ĐỒ ÁN MÔN HỌC</h2>
      </div>
    </div>
  )
}
