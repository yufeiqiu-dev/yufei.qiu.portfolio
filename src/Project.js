import { useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([
        {title: 'Wonderland Education (Sept 2023-Present)', role: 'Instructor', body: 'As a scratch instructor working at Wonderland education, I conducted engaging and interactive Scratch programming lessons for elementary students, and provided clear explanations, hands-on demonstrations, and individualized support to ensure student comprehension and progress.', id:1},
        {title: 'Data Mine Corporate Partner With No Limit LLC  (Aug 2023 - present)', role: 'Backend Developer', body: 'Led a small backend team through seven successful sprints, demonstrating strong leadership and project management skills. Spearheaded the development of a fully functional forum, showcasing expertise in backend development. Designed and optimized the data structure in MongoDB, ensuring efficient data storage and retrieval.', id: 2},
        {title: 'Networking HTTP Project', body: 'This web server project is efficiently serves web requests, seamlessly managing directory browsing. It operates in both TCP and TLS modes, ensuring secure communication. The server excels in handling concurrency, providing a robust and responsive web hosting solution.'},
        {title:'The Shell Project Written in lex, yacc, and C', body: 'Designed and implemented a custom Unix shell, demonstrating proficiency in system programming and command-line interface development. This project involved creating a fully functional shell capable of executing system commands, managing processes, handling I/O redirection, signal handling, sub-shell, text-reading, history, wildcarding, and more.'},
        {title: 'Dynamic Memory Allocator Implementation (malloc) in C', body: 'Implemented a custom dynamic memory allocator in C, showcasing advanced programming skills and deep understanding of memory management. This project involved designing and building a memory allocation library inspired by the behavior of the standard malloc and free functions. Key features include: buddy block structure, free block coalescing, and more.'},
        {title: 'File Compression Project (2022)', role: "Coder", author: "By Yufei Qiu", body: 'A file size reduction project implemented using Huffman Compression Tree structure. File size was able to be reduced by more than 50% after compression.', id: 3},
        {title: 'Teacher-Student Interactive APP (2021)', role: "Code writer and tester", author: "Team: Yufei Qiu, Phillip Bernwagner, Denis Kilseev, Winston Ngo", body: "A multi-threader user based interactive app that allows the user to log in and sign up as either student or teacher. Main functions includes uploading quizzes, grading quizzes, submit quizzes. Data are stored as object in the file.", id: 4}
    ]);


    return ( 
        <div className="project">
            {projects.map((project) => (
                <div className='project-preview' key={project.id}>
                    <h2>{ project.title }</h2>
                    {project.role && <p>Role: { project.role }</p>}
                    <p>{ project.author }</p>
                    <p>Description: { project.body }</p>
                </div>
            ))}

        </div>

     );
}
 
export default Project;