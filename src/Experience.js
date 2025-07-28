import { useState } from 'react';
import Layout from './Layout';
const Experience = () => {
    const [projects, setProjects] = useState([
        {title: "SDE Intern at Amazon Web Service (May 2025 - Aug 2025)", role: "SDE Intern", body: "At AWS Secrets Manager, I designed a CloudWatch-based metric system that emits operational and cost-related insights to customer accounts, enabling up to $48M in potential annual savings by identifying underutilized resources. As a stretch goal, I built an integrated dashboard in the Secrets Manager console, contributing to a large-scale service managing nearly 50 million secrets."},
        {title: 'Software Engineering Intern at Kohl\'s (June 2024 - Aug 2024)', role: 'Software Engineer', body: 'Worked in a corporate environment on a team of engineers. Implemented features, testcases, and upgrading existing code in spring boot applications. Focused on dealing with real world problems and deployed most of the changes to real world applications. Worked in agile development and trained in extreme programming.', id: 10},
        {title: 'Data Mine Corporate Partner With No Limit LLC  (Aug 2023 - May 2024)', role: 'Backend Developer', body: 'Led a small backend team through seven successful sprints, demonstrating strong leadership and project management skills. Spearheaded the development of a fully functional forum, showcasing expertise in backend development. Designed and optimized the data structure in MongoDB, ensuring efficient data storage and retrieval.', id: 2},

        {title: 'Wonderland Education (Sept-Dec 2023)', role: 'Instructor', body: 'As a scratch instructor working at Wonderland education, I conducted engaging and interactive Scratch programming lessons for elementary students, and provided clear explanations, hands-on demonstrations, and individualized support to ensure student comprehension and progress.', id:1}

    ]);
    
    return ( 
        <Layout>
            <div style={{minHeight:"80vh", backgroundColor:"#f8f9fa"}}>
            <div className="project-container">
                <div className="projects-list">
                    {projects.map((project) => (
                        <div className="project-item" key={project.id}>
                            <h2>{project.title}</h2>
                            {project.role && <p><strong>Role:</strong> {project.role}</p>}
                            {project.author && <p><strong>Author:</strong> {project.author}</p>}
                            <p className="project-description">{project.body}</p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </Layout>

     );
}
 
export default Experience;