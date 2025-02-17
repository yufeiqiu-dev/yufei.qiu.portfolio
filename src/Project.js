import { useState } from 'react';
import Layout from './Layout';

const Project = () => {
    const [projects] = useState([
        { title: 'Music Genre Classification Project', 
          author: 'Yufei Qiu, Maanas Karwa, Samantha Sudhoff, Yatian Lai, Siddharth Prabakar', 
          body: 'Trained multiple machine learning models (KNN, SVM, XGBoost, Random Forest) to improve classification performance. Hypertuned parameters and optimized using PCA, ensemble methods, and more.', 
          id: 0 },
        { title: 'Scala Compiler Project', 
          body: 'Developed a Scala compiler with optimizations, including CPS translation. Implemented features such as arithmetic operations, error handling, type checking, memory allocation, and garbage collection.', 
          id: 1 },
        { title: 'Teacher-Student Web Manager', 
          body: 'Re-implemented an interactive teacher-student app using React with backend functions and secure PostgreSQL database. Supports student and teacher registration, quiz management, and data visualization.', 
          link: 'https://github.com/Lilflyy/cs348Project' },
        { title: 'System Task Monitor', 
          role: 'Developer', author: 'Team: Yufei Qiu, Phillip Bernwagner, Nick Myrick', 
          body: 'Developed a Unix-like system task monitor using C and GTK 3.0 for GUI. Displays running processes, memory maps, open file descriptors, and real-time CPU utilization in a tree structure.' },
        { title: 'Binary CNN Classifier', 
          body: 'Built a binary classifier using PyTorch CNN to distinguish between real photos and art drawings. Achieved 80% validation accuracy.', 
          link: 'https://github.com/Lilflyy/BinaryImageClassifier' },
        { title: 'Networking HTTP/HTTPS Project', 
          body: 'Developed a web server capable of handling HTTP/HTTPS requests efficiently, with support for directory browsing and concurrency, ensuring secure communication with TLS.' },
        { title: 'Unix Shell (Lex, Yacc, C)', 
          body: 'Designed and implemented a custom Unix shell supporting command execution, process management, I/O redirection, signals, sub-shells, wildcarding, and history tracking.' },
        { title: 'Dynamic Memory Allocator (malloc) in C', 
          body: 'Implemented a custom dynamic memory allocator inspired by standard `malloc` and `free` functions. Features buddy block structure, free block coalescing, and performance optimizations.' },
        { title: 'File Compression Project (2022)', 
          role: "Coder", author: "By Yufei Qiu", 
          body: 'Implemented Huffman Compression Tree structure to reduce file size by more than 50%.', id: 3 },
        { title: 'Teacher-Student Interactive APP (2021)', 
          role: "Code Writer & Tester", 
          author: "Yufei Qiu, Phillip Bernwagner, Denis Kilseev, Winston Ngo", 
          body: 'Developed a multi-threaded interactive app for teachers and students. Features include quiz creation, grading, and user authentication with object-based file storage.', 
          id: 4 }
    ]);

    return (
        <Layout>
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
        </Layout>
    );
};

export default Project;
