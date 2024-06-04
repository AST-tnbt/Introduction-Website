import background from "../assets/background.jpg"
export default function Home() {
  return (
    <div className="bg-cover bg-center w-full min-h-screen select-none font-robo flex flex-col space-y-4 items-center z-10 " style={{backgroundImage: `url(${background})`}}>
      <h1 className="text-4xl font-normal mt-36 animate-fadeUp">Xin chào!</h1>
      <p className="text-2xl font-light p-6 flex justify-center max-w-screen-sm text-[#333] z-10 animate-fadeUp">Chào mừng bạn đến với website giới thiệu đồ án! <br/><br/>
        Chúng mình là nhóm The Wolf Pack, là những sinh viên đến từ khoa Hệ thống thông tin, trường Đại học Công Nghệ Thông Tin. <br/>
        Mong rằng bạn sẽ có những trải nghiệm tốt khi tìm hiểu về website cũng như đồ án môn học của nhóm. <br/> <br/>
        Mọi góp ý vui lòng gửi về hòm thư: trinhtin272@gmail.com<br/>
        Chúng mình rất mong nhận được sự giúp đỡ cũng như ý kiến góp ý từ các bạn.   
      </p>
    </div>
  )
}
