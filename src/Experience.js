import { useState } from 'react';
const Experience = () => {
    const [projects, setProjects] = useState([
        {title: 'Software Engineering Intern at Kohl\'s (June 2024 - Aug 2024)', role: 'Software Engineer', body: 'Worked in a corporate environment on a team of engineers. Implemented features, testcases, and upgrading existing code in spring boot applications. Focused on dealing with real world problems and deployed most of the changes to real world applications. Worked in agile development and trained in extreme programming.', id: 10},
        {title: 'Data Mine Corporate Partner With No Limit LLC  (Aug 2023 - May 2024)', role: 'Backend Developer', body: 'Led a small backend team through seven successful sprints, demonstrating strong leadership and project management skills. Spearheaded the development of a fully functional forum, showcasing expertise in backend development. Designed and optimized the data structure in MongoDB, ensuring efficient data storage and retrieval.', id: 2},

        {title: 'Wonderland Education (Sept-Dec 2023)', role: 'Instructor', body: 'As a scratch instructor working at Wonderland education, I conducted engaging and interactive Scratch programming lessons for elementary students, and provided clear explanations, hands-on demonstrations, and individualized support to ensure student comprehension and progress.', id:1}

    ]);
    
    return ( 
        <div className="experience">
            {projects.map((project) => (
                <div className='project-preview' key={project.id}>
                    <h2>{ project.title }</h2>
                    {project.role && <p>Role: { project.role }</p>}
                    <p>{ project.author }</p>
                    <p>Description: { project.body }</p>
                    {project.link && (
                        <p>link: {project.link}</p>
                    )}
                </div>
            ))}

        </div>

     );
}
 
export default Experience;