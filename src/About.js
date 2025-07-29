import pic from './profile.JPG';
import school from './purdue_logo.png';
import Layout from './Layout';

const About = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Layout>
        <div className='app-content'>
      <div className="about-container">
        <section className="about-section">
          <p className="section-intro">Get To Know More</p>
          <h1 className="section-title">About Me</h1>

          <div className="about-content">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img src={pic} alt="Profile" className="profile-image" />
            </div>

            {/* Details Section */}
            <div className="about-info">
              <div className="info-box">
                <h3>Skills</h3>
                <p>Java | C/C++ | Python | Spring Boot | SQL/MongoDB | React.js | Node | Scala | Pytorch</p>
              </div>

              <div className="info-box">
                <h3>Education</h3>
                <p>Purdue University, B.S. in Computer Science, Minor in Mathematics</p>
                <p>Purdue University, M.S. in Computer Science</p>
              </div>
            </div>

            {/* Bio and School Link */}
            <div className="about-text-with-logo">
                <p className="about-paragraph">
                    Hi, I’m <strong>Yufei Qiu</strong>, a Master’s student at <strong>Purdue University</strong>, majoring in Computer Science.
                    I have a passion for problem-solving, full-stack development, and learning new technologies. Always looking forward to learning new things!
                </p>

                <div className="school-logo-inline">
                    <img
                    src={school}
                    alt="Purdue University"
                    className="school-logo"
                    onClick={() => openInNewTab("https://www.purdue.edu")}
                    />
                </div>
            </div>

          </div>

          {/* Resume Download Button at Bottom */}
          <div className="download-resume-bottom">
            <a href="/MyResume.pdf" download className="download-button">
              📄 Download My Resume
            </a>
          </div>
        </section>
      </div>
      </div>
    </Layout>
  );
};

export default About;
