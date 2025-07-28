import linkedin from './linkedin.png';

const Footer = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return ( 
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>More Information</h4>
                    <p>Created by Yufei Qiu</p>
                    <p>Last Updated: 07/27/25</p>
                </div>
                
                <div className="footer-column">
                    <h4>Get in Touch</h4>
                    <p><strong>Phone:</strong> 502-759-0858</p>
                    <p><strong>Email:</strong> qiu202@purdue.edu</p>
                </div>

                <div className="footer-column">
                    <h4>Connect</h4>
                    <img 
                        src={linkedin} 
                        className="linkedin-icon" 
                        alt="LinkedIn" 
                        onClick={() => openInNewTab("https://www.linkedin.com/in/yufei-qiu-242067210")} 
                    />
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Yufei Qiu. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
