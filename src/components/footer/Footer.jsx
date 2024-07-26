import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer_container">
                    <h1 className="footer_title">Afifa Ejaz</h1>

                    <ul className='footer_list'>
                        <li><a className='footer_link' href="">About</a></li>
                        <li><a className='footer_link' href="">Skills</a></li>
                        <li><a className='footer_link' href="">Project</a></li>
                    </ul>

                    <div className="footer_socials">
                        <a href="https://www.instagram.com/afifaejazz/" className="footer_social-icon" target='_blank'><i className="uil uil-instagram"></i></a>
                        <a href="https://github.com/AfifaEjaz/" className="footer_social-icon" target='_blank'><i className="uil uil-github"></i></a>
                        <a href="https://www.linkedin.com/feed/" className="footer_social-icon" target='_blank'><i className="uil uil-linkedin"></i></a>
                    </div>

                    <span className='footer_copy'>&#169; All rights reserved</span>
                </div>
            </footer>
        </>
    )
}

export default Footer