import Typewriter from 'typewriter-effect'
import Layout from '../components/Layout';
const Home = () => {
    return ( 
        <Layout>
            <div className='app-content'>
        <div className="home" >

                <h2>
                <span className="typewriter-span">
                <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: ["Hi, welcome to my personal website"]
                }}
                />
                </span>

                </h2>

            
            </div>
            </div>
        </Layout>
        

    


     );
}
 
export default Home;

