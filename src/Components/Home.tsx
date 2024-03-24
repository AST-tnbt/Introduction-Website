import background from "../assets/background.jpg"
export default function Home() {
  return (
    <div className="bg-cover bg-center w-screen h-screen select-none font-robo flex flex-col space-y-4 items-center justify-center " style={{backgroundImage: `url(${background})`}}>
      <h1 className="text-4xl pt-20 md:pt-0 lg:pt-0 font-normal">Xin chào!</h1>
      <p className="text-2xl font-light p-6 flex justify-center max-w-screen-sm text-[#333] z-10">Chào mừng bạn đến với website giới thiệu đồ án! <br/><br/>
        Chúng mình là nhóm The Wolf Pack, là những sinh viên đến từ khoa Hệ thống thông tin, trường Đại học Công Nghệ Thông Tin. <br/>
        Mong rằng bạn sẽ có những trải nghiệm tốt khi tìm hiểu về website cũng như đồ án môn học của nhóm. <br/> <br/>
        Mọi góp ý vui lòng gửi về hòm thư: voducvinh28@gmail.com<br/>
        Chúng mình rất mong nhận được sự giúp đỡ cũng như ý kiến góp ý từ các bạn.   
      </p>
    </div>
  )
}
