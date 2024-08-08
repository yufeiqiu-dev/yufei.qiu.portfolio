import { useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([
        {title: 'Software Engineering Intern at Kohl\'s (June 2024 - Aug 2024)', role: 'Software Engineer', body: 'Worked in a corporate environment on a team of engineers. Implemented features, testcases, and upgrading existing code in spring boot applications. Focused on dealing with real world problems and deployed most of the changes to real world applications. Worked in agile development and trained in extreme programming.', id: 10},
        {title: 'Data Mine Corporate Partner With No Limit LLC  (Aug 2023 - May 2024)', role: 'Backend Developer', body: 'Led a small backend team through seven successful sprints, demonstrating strong leadership and project management skills. Spearheaded the development of a fully functional forum, showcasing expertise in backend development. Designed and optimized the data structure in MongoDB, ensuring efficient data storage and retrieval.', id: 2},

        {title: 'Wonderland Education (Sept-Dec 2023)', role: 'Instructor', body: 'As a scratch instructor working at Wonderland education, I conducted engaging and interactive Scratch programming lessons for elementary students, and provided clear explanations, hands-on demonstrations, and individualized support to ensure student comprehension and progress.', id:1},
        {title:'Teacher-Student Web Manager', body:'This project is similar to my teacher-student interactive app coded in 2021 using java. However, this project is re-implemented by me completed on a react-project with backend function calls and secure database, using postgresql. This project simply shows the database information for the user, as well as registering new student, new teacher, and new quiz. Here is the link for more information: https://github.com/Lilflyy/cs348Project'},
        {title:'System Task Monitor', role:'developer', author: 'Team: Yufei Qiu, Phillip Bernwagner, Nick Myrick', body:'This project aimed to create a unix-like task monitor. Primarily coded in C with GTK 3.0 as GUI, our system task monitor was able to display system information, all running process with additional information, like open file descriptors, memory maps and more, in a tree structure,and continuously updating CPU information in a graph-view.'},
        {title: 'Binary CNN Classifier', body: 'This project was made in python with pytorch cnn and other packages. The goal of this classifier is to classify between real photos and art drawing. The model current has 80% validation accuracy',link: 'https://github.com/Lilflyy/BinaryImageClassifier'},
        {title: 'Networking HTTP/HTTPS Project', body: 'This web server project is efficiently serves web requests, seamlessly managing directory browsing. It operates in both TCP and TLS modes, ensuring secure communication. The server excels in handling concurrency, providing a robust and responsive web hosting solution.'},
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
                    {project.link && (
                        <p>link: {project.link}</p>
                    )}
                </div>
            ))}

        </div>

     );
}
 
export default Project;