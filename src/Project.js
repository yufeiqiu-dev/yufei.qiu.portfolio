import { useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([
        {title: 'Wonderland Education (Sept 2023-Present)', role: 'Instructor', body: 'As a scratch instructor working at Wonderland education, I conducted engaging and interactive Scratch programming lessons for elementary students, and provided clear explanations, hands-on demonstrations, and individualized support to ensure student comprehension and progress.', id:1},
        {title: 'Data Mine Corporate Partner With No Limit LLC  (Aug 2023 - present)', role: 'Backend Developer', body: 'Worked as a backend developer to ensure the security of the company website.', id: 2},
        {title: 'File Compression Project (2022)', role: "Coder", author: "By Yufei Qiu", body: 'A file size reduction project implemented using Huffman Compression Tree structure. File size was able to be reduced by more than 50% after compression.', id: 3},
        {title: 'Teacher-Student Interactive APP (2021)', role: "Code writer and tester", author: "Team: Yufei Qiu, Phillip Bernwagner, Denis Kilseev, Winston Ngo", body: "A multi-threader user based interactive app that allows the user to log in and sign up as either student or teacher. Main functions includes uploading quizzes, grading quizzes, submit quizzes. Data are stored as object in the file.", id: 4}
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