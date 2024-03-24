import Avatars from "./Avatars";

const groups = [
    { 
        course : "IS208 - Quản lý dự án công nghệ thông tin",
        member : [
            {
                name: "Võ Đức Vĩnh", 
                img: `${Avatars.vinh}`,
                id: "22521684",
                role: "Trưởng nhóm"
            },
            {
                name: "Dương Văn Súa",
                img: `${Avatars.sua}`,
                id: "22521267",
                role: "Thành viên" 

            },
            {
                name: "Nguyễn Chí Vĩ",
                img: `${Avatars.vi}`,
                id: "22521656",
                role: "Thành viên"
            },
            {
                name: "Trịnh Nguyên Bảo Tín",
                img: `${Avatars.tin}`,
                id: "22521482",
                role: "Thành viên" 

            }
        ]
    },
    { 
        course : "IS216 - Lập trình Java",
        member : [
            {
                name: "Nguyễn Chí Vĩ",
                img: `${Avatars.vi}`,
                id: "22521656",
                role: "Trưởng nhóm"
            },
            {
                name: "Dương Văn Súa",
                img: `${Avatars.sua}`,
                id: "22521267",
                role: "Thành viên" 
            },
            
            {
                name: "Trịnh Nguyên Bảo Tín",
                img: `${Avatars.tin}`,
                id: "22521482",
                role: "Thành viên" 

            }
        ]
    }
];
export default groups;