import {React, useEffect} from 'react'
import './project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
      }, [])

    const projects = [
        {
            image: "https://images.craigslist.org/00Y0Y_lfGrArDdSBi_0uY0hq_600x450.jpg",
            name: "E-commerce website",
            description: "An complete e-commerce website having three panels guest, user and admin. It has various functionalities like login/reg, add to cart, order placement, admin dashboard etc",
            repo: "https://github.com/AfifaEjaz/user-Authentication",
            liveURL: "https://user-authentication-three.vercel.app/"
        },
        {
            image: "https://www.descope.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxqb1f63q68s1%2F6TY3QIvFYKLLLgtkFCFvxL%2F890292d11ea0490eed8b0b426bc849cb%2FBiometric_auth_methods_thumbnail.jpg&w=3840&q=75",
            name: "Complete user authentication",
            description: "A complete user authentication application, it has login and registeration form,update & forget password functionality and you reset your password through a link provided in your mail.",
            repo: "https://github.com/AfifaEjaz/user-Authentication",
            liveURL: "https://user-authentication-three.vercel.app/"
        },
        {
            image: "https://thearchitectsdiary.com/wp-content/uploads/2023/12/Mumbai-Furniture-Store-1-jpg.webp",
            name: "Furniture Store",
            description: "An complete e-commerce website have various technologies, like login/reg, add to cart, order placement etc",
            repo: "https://github.com/AfifaEjaz/user-Authentication",
            liveURL: "https://user-authentication-three.vercel.app/"
        }
    ]

    return (
        <>
            <section className='projects' id='projects'>
                <h3 className="project_title">Projects</h3>

                <div  data-aos='fade-up'>
                    {
                        projects.map((projects, key) => (
                            <div key={key} className='projects_box'>
                                <div className='image_box'>
                                    <img className='project_image' src={projects.image} alt="" />
                                </div>
                                <div className='content'>
                                    <h5 className='project_name'>{projects.name}</h5>
                                    <p>{projects.description}</p>
                                    <div className="links">
                                        <a href={projects.repo} className='project_link' target="_blank" rel="noopener noreferrer"><span >Github</span></a>
                                        <a href={projects.liveURL} className='project_link' target="_blank" rel="noopener noreferrer"><span>Live url</span></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Project