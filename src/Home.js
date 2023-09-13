import Typewriter from 'typewriter-effect'
const Home = () => {
    return ( 
        <div className="home" >
            <div>
                <h2>
                <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: ["Hi, welcome to my personal website"]
                }}
                />

                </h2>

            </div>
           
        </div>
    


     );
}
 
export default Home;

