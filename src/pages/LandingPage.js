import pro from "../assets/icons/employee.png"
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    const handleToDEtall = () => {
        navigate("/details")
    };
    return (
        <div className="text-center ">
            <div className="flex justify-center">
                <img src={pro} alt="line" width={100} />
            </div>
            <p className="text-2xl font-bold uppercase">About Me</p>
            <p className="text-[1rem] text-md mt-2 mx-36">โดย พล.ต.อ.สุรเชษฐ์ กล่าวว่า ได้ขออนุมัติศาลออกหมายจับผู้ต้องหาเป็นข้าราชการตำรวจรวม 6 นาย เป็นระดับสารวัตร 1 นาย
                และรองสารวัตร 5 นาย ในความผิดฐานเป็นเจ้าพนักงาน ปฏิบัติหรือละเว้นการปฏิบัติหน้าที่โดยมิชอบ เพื่อให้เกิดความเสียหายแก่ผู้หนึ่งผู้ใด
                หรือปฏิบัติหรือละเว้นการปฏิบัติหน้าที่โดยทุจริต ,เพื่อจะช่วยผู้อื่นมิให้ต้องรับโทษ หรือให้รับโทษน้อยลง , ร่วมกันทำให้เสียหาย ทำลาย ช่อนเร้น
                เอาไปเสีย หรือทำให้สูญหายหรือไร้ประโยชน์ซึ่งพยานหลักฐานในการกระทำความผิด ,ร่วมกันช่วยผู้อื่นซึ่งเป็นผู้กระทำความผิด หรือเป็นผู้ต้องหาว่ากระทำความผิด
                อันมิใช่ความผิดลหุโทษ เพื่อไม่ให้ต้องโทษ โดยให้พำนักแก่ผู้นั้น โดยซ่อนเร้นหรือโดยช่วยผู้นั้นด้วยประการใด เพื่อไม่ให้ถูกจับกุม ด้วยการทำลายหลักฐาน ซ่อนเร้น
                เซิร์ฟเวอร์ และอาวุธปืน</p>{" "}
            <br />
            <button className="text-[red] underline" onClick={() => handleToDEtall()}>Next</button>
        </div>

    );

}
export default LandingPage;