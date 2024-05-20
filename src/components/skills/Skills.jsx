import './skills.css'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const Skills = () => {
    return (
        <>

            <section className='section' id='skill'>
                <h3 className="section__title">Skills</h3>
                <div className="skill_container">
                    <div className="skill_box">
                        <TiHtml5 className='icon' />
                    </div>
                    <div className="skill_box">
                        <IoLogoCss3 className='icon' />
                    </div>
                    <div className="skill_box">
                        <IoLogoJavascript className='icon' />
                    </div>
                    <div className="skill_box">
                        <FaBootstrap className='icon' />
                    </div>
                    <div className="skill_box">
                        <RiReactjsLine className='icon' />
                    </div>
                    <div className="skill_box">
                        <FaNodeJs className='icon' />
                    </div><div className="skill_box">
                        <SiExpress className='icon' />
                    </div>
                </div>

                <div className="skill_container">
                <div className="skill_box">
                        <SiFirebase className='icon' />
                    </div><div className="skill_box">
                        <SiMongodb className='icon' />
                    </div>
                    <div className="skill_box">
                        <FaGitAlt className='icon' />
                    </div>
                    <div className="skill_box">
                        <SiMysql className='icon' />
                    </div>
                   
                </div>
            </section>
           
        </>
    )
}

export default Skills