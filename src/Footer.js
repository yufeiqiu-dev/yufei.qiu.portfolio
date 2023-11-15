import linkedin from './linkedin.png'
const Footer = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return ( 
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <h4>Contact Information</h4>
          <div className="col">
            
          
            <div>
                <p>Created by Yufei Qiu</p>
            </div>
            <div>
                <p>Phone Number: <br /> 502-759-0858</p>
            </div>
            <div>
                 <p>Email:<br/> qiu202@purdue.edu</p>
            </div>
            
            <div>
            <img src={linkedin} className="link-icon" onClick={() => { openInNewTab("https://www.linkedin.com/in/yufei-qiu-242067210") }}/>
            </div>
           
          </div>
         
      </div>
    </div>
    </div>

     );
}
 
export default Footer;