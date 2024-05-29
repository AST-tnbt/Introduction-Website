import images from "./images";
import videoDemo from "../assets/videoDemo.mp4";
const projects = [
    {
        course : "IS208 - Quản lý dự án công nghệ thông tin",
        name: "Game đua xe trên máy tính cá nhân",
        topic:  "Xây dựng một game đua xe trên máy tính cá nhân, bao gồm các chức năng đăng nhập, tiền và shop vật phẩm trong game, đặt cược đua xe để lấy tiền thưởng, shop bán vật phẩm. Có ít nhất 3 mẫu đường đua khác nhau (mỗi mẫu sẽ có 3 tùy chọn ngắn, dài, trung bình), ít nhất 3 bộ mẫu nhân vật khác nhau (trong đó có 1 mẫu dùng hình ảnh các thành viên nhóm), có các rào cản trên đường đua. Ít nhất 2 minigames.",
        introduction: "Chưa cập nhật",
        source: "https://github.com/AST-tnbt/IS208_GameDuaXe.git",
        demo:"Chưa cập nhật",
    },
    {
        course : "IS216 - Lập trình Java",
        name: "Phần mềm quản lý bệnh viện",
        topic:  "Phòng khám X đang trên đà phát triển về số lượng bệnh nhân và mong muốn mở rộng quy mô phát triển. Trước vấn đề như vậy, việc quản lý và lưu trữ dữ liệu của phòng khám trên giấy tờ trở nên ngày càng khó khăn. Để giải quyết tình huống trên, phòng khám cần một giải pháp tin học để quản lý thông tin bệnh nhân, nhân sự và các dữ liệu khác. Các bộ phận quản lý hệ thống bao gồm người quản lý, chuyên viên, nhân viên kế toán và bác sĩ.",
        introduction: "Chưa cập nhật",
        source: "https://github.com/AST-tnbt/Clinic_Management",
        demo:"Chưa cập nhật",
        image: [images.login, images.dashboard, images.employee, images.patient, images.medicine, images.room, images.fee],
        video: videoDemo
    }
];

export default projects;