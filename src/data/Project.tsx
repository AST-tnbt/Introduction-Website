import images from "./images";
import videoDemo from "../assets/videoDemo.mp4";
const projects = [
    {
        course : "IS207 - Phát triển ứng dụng web",
        name: "The Wolf Pack Computer Shop Website",
        topic:  "Đang cập nhật",
        source: "https://github.com/nguyenchivi001/IS207_P13_TWPComputerShop",
        image: [],
        // plan: "https://drive.google.com/drive/folders/114iTu4OOCb440hke5b4PBgU4CiCU4yVm?usp=sharing"
    },
    {
        course : "IS208 - Quản lý dự án công nghệ thông tin",
        name: "Game đua xe trên máy tính cá nhân",
        topic:  "Xây dựng một game đua xe trên máy tính cá nhân, bao gồm các chức năng đăng nhập, tiền và shop vật phẩm trong game, đặt cược đua xe để lấy tiền thưởng, shop bán vật phẩm. Có ít nhất 2 mẫu đường đua khác nhau (mỗi mẫu sẽ có 3 tùy chọn ngắn, dài, trung bình), có các rào cản trên đường đua. Ít nhất 1 minigames.",
        source: "https://github.com/AST-tnbt/IS208.O21_GameDuaXe",
        image: [images.loginGame, images.home, images.map, images.bet, images.play, images.shop, images.setting],
        // plan: "https://drive.google.com/drive/folders/1Z2_KKgoJcEnGjPwo5OP6lk7jss3lsPC9?usp=sharing"
    },
    {
        course : "IS216 - Lập trình Java",
        name: "Phần mềm quản lý bệnh viện",
        topic:  "Phòng khám X đang trên đà phát triển về số lượng bệnh nhân và mong muốn mở rộng quy mô phát triển. Trước vấn đề như vậy, việc quản lý và lưu trữ dữ liệu của phòng khám trên giấy tờ trở nên ngày càng khó khăn. Để giải quyết tình huống trên, phòng khám cần một giải pháp tin học để quản lý thông tin bệnh nhân, nhân sự và các dữ liệu khác. Các bộ phận quản lý hệ thống bao gồm người quản lý, chuyên viên, nhân viên kế toán và bác sĩ.",
        source: "https://github.com/AST-tnbt/Clinic_Management",
        image: [images.login, images.dashboard, images.employee, images.patient, images.medicine, images.room, images.tool, images.fee],
        video: videoDemo,
        // plan: "https://drive.google.com/drive/folders/1GN79qPQdEgr2uqUXt-He6Rrx9oMOPnhS?usp=sharing"
    }
];

export default projects;