import facebook from "../assets/icons/facebook (1).png"
import line from "../assets/icons/line.png"
import instagram from "../assets/icons/instagram (1).png"
import pro from "../assets/icons/working.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-[12vh]">
            <img src={pro} alt="pro" width={50} className="cursor-pointer" />
            <ul className="hidden md:flex content-center    ">
                <li className="px-2">
                    <a href="https://www.netflix.com/browse" target="_blank">
                        <img src={facebook} alt="line" width={50} /></a>
                </li>
                <li className="px-2">
                    <a href="https://www.netflix.com/browse" target="_blank">
                        <img src={instagram} alt="line" width={50} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.netflix.com/browse" target="_blank">
                        <img src={line} alt="line" width={50} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;