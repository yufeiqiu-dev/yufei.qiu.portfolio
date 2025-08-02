import { experienceData } from '../data/experiences';
import ExperienceList from '../components/ExperienceCard/ExperienceCardList';
import Layout from '../components/Layout';
const Experience = () => {

    return ( 
        <Layout>
            <div className='app-content'>
                <ExperienceList data={experienceData}/>
            </div>
        </Layout>

     );
}
 
export default Experience;