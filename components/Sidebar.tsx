import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
'../node_modules/typescript/lib/typescript.d';

const Sidebar = () => {
    return (
        <div>
            <img src="myavt.jpeg"
            alt="my avt"
            className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider">
                Phan Kang Min
                </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Front-end Developer
                </p>
            {/* <a className="px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name">
                Download Resume
                </a> */}
            {/* social icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
                <a href="https://github.com/kagmin23">
                    <FaGithub className="w-8 h-8 cursor-pointer"/>
                </a>

                <a href="https://www.facebook.com/KaggMin.10.03?mibextid=LQQJ4d">
                    <FaFacebook className="w-8 h-8 cursor-pointer"/>
                </a>

                <a href="https://maps.app.goo.gl/D8LhJvQW6YhHFFDr8">
                    <FaLocationDot className="w-8 h-8 cursor-pointer"/>
                </a>
                
                <a href="https://www.instagram.com/kag_10.03/">
                    <GrInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-gray-200"
                style={{
                    marginLeft: "-1em",
                    marginRight: "-1rem"
                }}>
                <div className="flex items-center justify-center space-x-2">
                    <span>Address: Da Nang, Vietnam</span>
                </div>
                <p className="my-2">Email: phankangmin@gmail.com</p>
                <p className="my-2">Phone: +84 342 555 702</p>
                <p className="my-2">---------------------------------- OBJECTIVE ----------------------------------</p>
                <p className="my-2">I am a Front-End Developer with a passion for creating interactive and engaging user interfaces to develop high-quality websites and web applications. I look forward to working in a creative environment and visionary team where I can not only develop my technical skills but also contribute to the product development process and create user experiences best possible. My commitment is to always learn and improve my skills to meet the changing requirements for the success of every project as well as the company, while contributing to the development and building of success long-term career. </p>
            </div>
            {/* Email button */}
            <button className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
                Email</button>
            <button className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
                Toggle Theme</button>
        </div>
    )
}

export default Sidebar