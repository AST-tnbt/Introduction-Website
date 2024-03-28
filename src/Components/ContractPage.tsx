export default function ContractPage() {
  return (
    <div className="bg-[#f0f0f0] w-full  text-[#333] z-10 p-4">
      <h1 className="text-4xl pt-36 font-medium text-center">Hợp đồng thành lập nhóm</h1>
      <div className=" m-auto max-w-screen-sm p-4 grid grid-cols-1 lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">1. Nguyên tắc làm việc nhóm</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Tôn trọng ý kiến của mỗi thành viên.</li>
            <li>Chia sẻ thông tin và tài nguyên một cách công bằng.</li>
            <li>Tuân thủ thời hạn và cam kết đã đặt ra.</li>
            <li>Giải quyết xung đột một cách xây dựng và công bằng.</li>
            <li>Đảm bảo mỗi thành viên được đề xuất ý kiến và tham gia vào quyết định.</li>
          </ul>
        </div>
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">2. Kế hoạch giao tiếp nhóm</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Xác định phương tiện giao tiếp hiệu quả: Gmail, Zalo, Google Meet.</li>
            <li>Xác định thời gian và tần suất giao tiếp.</li>
            <li>Phân công người chịu trách nhiệm ghi lại nội dung nếu cần thiết.</li>
          </ul>
        </div>
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">3. Kế Hoạch Họp Nhóm:</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Xác định thời gian và địa điểm tổ chức họp.</li>
            <li>Chuẩn bị, thống nhất nội dung cuộc họp</li>
            <li>Lập biên bản cuộc họp</li>
          </ul>  
        </div>
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">4. Quy tắc thưởng phạt</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Thưởng: Công nhận và khen ngợi thành viên hoàn thành công việc tốt, đóng góp tích cực vào dự án.</li>
            <li>Phạt: Phê bình các hành vi vi phạm, trừ điểm khi xét đánh giá thành viên.</li>
          </ul>
        </div>
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">5. Tiêu Chí Đánh Giá Thành Viên Cuối Đồ Án và Cuối Môn Học</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Dựa trên hiệu suất làm việc của mỗi thành viên trong nhóm.</li>
            <li>Bao gồm đánh giá từ cả thành viên trong nhóm và giáo viên hướng dẫn.</li>
            <li>Xác định rõ tiêu chí và trọng số của mỗi tiêu chí đánh giá.</li>
          </ul>
        </div>
        <div className="m-4 animate-fadeUp">
          <h2 className="text-2xl mt-8 font-normal">6. Cam kết</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Mỗi thành viên cam kết tuân thủ và thực hiện đúng các điều khoản của hợp đồng.</li>
            <li>Sẵn sàng chịu trách nhiệm và thúc đẩy sự thành công của nhóm.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
