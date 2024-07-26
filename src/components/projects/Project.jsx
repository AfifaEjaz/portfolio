import React, { useEffect } from 'react';
import './project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecommerce from '../../assets/ecommerceee.png';
import moviehive from '../../assets/moviehiveee.png';
import userauth from '../../assets/userAuthh.png';
import expensetracker from '../../assets/expensetracker.png';

const Project = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const projects = [
        {
            image: ecommerce,
            name: "E-commerce website",
            description: "E-commerce website having three panels guest, user and admin. It has various functionalities like login/reg, add to cart, order placement, admin dashboard etc",
            repo: "https://github.com/AfifaEjaz/ecommerceWeb",
            liveURL: "https://ecommerce-web-pearl.vercel.app/"
        },
        {
            image: userauth,
            name: "Complete user authentication",
            description: "A complete user authentication application, it has login and registration form, update & forget password functionality and you reset your password through a link provided in your mail.",
            repo: "https://github.com/AfifaEjaz/user-Authentication",
            liveURL: "https://user-authentication-three.vercel.app/"
        },
        {
            image: moviehive,
            name: "MovieHive",
            description: "Developed a movie recommendation app using ReactTS and ChakraUI, that supports CRUD Operations, sorting & theming",
            repo: "https://github.com/AfifaEjaz/MovieHive",
            liveURL: "https://movie-hive-three.vercel.app/"
        },
        {
            image: expensetracker,
            name: "Expense Tracker",
            description: "With this web you can track your expenses through CRUD operations",
            repo: "https://github.com/AfifaEjaz/expence-Trackerr",
            liveURL: "https://expence-trackerr-hdq9.vercel.app/"
        }
    ];

    return (
        <>
            <section className='projects' id='projects'>
                <h3 className="project_title">Projects</h3>

                <div data-aos='fade-up'>
                    {
                        projects.map((project, key) => (
                            <div key={key} className='projects_box'>
                                <div className='image_box'>
                                    <img className='project_image' src={project.image} alt={project.name} />
                                </div>
                                <div className='content'>
                                    <h5 className='project_name'>{project.name}</h5>
                                    <p>{project.description}</p>
                                    <div className="links">
                                        <a href={project.repo} className='project_link' target="_blank" rel="noopener noreferrer"><span>Github</span></a>
                                        <a href={project.liveURL} className='project_link' target="_blank" rel="noopener noreferrer"><span>Live URL</span></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Project;
