import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Yufei Qiu</h1>
            <div className="links">
                <a href='#/'>Home</a>
                <a href='#/experience'>Experience</a>
                <a href='#/project'>Projects</a>
                <a href='#/about'>About me</a>
                <a href='#/contact'>Contact me</a>
            </div>

        </nav>

    );
}
 
export default Navbar;