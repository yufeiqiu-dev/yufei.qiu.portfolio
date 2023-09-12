import { useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([
        {title: 'Data Mine Corporate Partner With No Limit LLC', role: 'Backend Developer', body: 'Worked as a backend developer to ensure the security of the company website.', id: 1},
        {title: 'File Compression Project', role: "Coder", author: "By Yufei Qiu", body: 'A file size reduction project implemented using Huffman Compression Tree structure. File size was able to be reduced by more than 50% after compression.', id: 2},
        {title: 'Teacher-Student Interactive APP', role: "Code writer and tester", author: "Team: Yufei Qiu, Phillip Bernwagner, Denis Kilseev, Winston Ngo", body: "A multi-threader user based interactive app that allows the user to log in and sign up as either student or teacher. Main functions includes uploading quizzes, grading quizzes, submit quizzes. Data are stored as object in the file.", id: 3}
    ]);


    return ( 
        <div className="project">
            {projects.map((project) => (
                <div className='project-preview' key={project.id}>
                    <h2>{ project.title }</h2>
                    <p>Role: { project.role }</p>
                    <p>{ project.author }</p>
                    <p>Description: { project.body }</p>
                </div>
            ))}

        </div>

     );
}
 
export default Project;