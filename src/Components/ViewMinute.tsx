import { useParams } from "react-router-dom";
import { DocumentViewer } from 'react-documents';
import minutes from "../data/Documents";
import background from "../assets/background_planspage.jpg";

export default function ViewMinute() {
    const {minuteID} = useParams();
    if (!minuteID) {
        return <div className="min-h-screen w-screen bg-white">
        </div>
    }
    const minute = minutes[parseInt(minuteID)];
    return (
    <div>
        <div className="text-[#333] min-h-screen w-full bg-cover z-10 p-6 font-robo" style={{backgroundImage : `url(${background})`}}>
        <h1 className="pt-32 text-center text-3xl font-medium pb-8">Biên cuộc bản họp</h1>
        <DocumentViewer
            viewerUrl={'https://docs.google.com/gview?url=%URL%&embedded=true'}
            url={minute.url}
            viewer="url"
            style={{width: "60%", height: "750px", margin: "auto"}}
            >
        </DocumentViewer>
        </div>
    </div>
  )
}
