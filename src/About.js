import pic from './profile.JPG'
import school from './purdue.svg'
const About = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return ( 
        <section className="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img src={pic} className="about-pic"/>
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h3>Skills</h3>
              <p>Java C/C++ <br /> Python <br /> Bash<br /> SQL <br /> Web</p>
            </div>
            <div class="details-container">
              <h3>Education</h3>
              <p>Purdue University Currently pursuing Bachelor of Science</p>
            </div>
          </div>
          <div class="text-container">
            
            <div>
                 <p>
            I am Yufei Qiu, a junior in Purdue University, majoring in Computer Science with a Mathematics minor. Always looking forward to learn new things!
            </p>
            </div>
            <div> 
               
                    <img src={school} className="icon" onClick={() => { openInNewTab("https://www.purdue.edu") }}/>
              
            </div>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default About;