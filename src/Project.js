import { useState, useReducer, useEffect } from 'react';
import Layout from './Layout';

const projects_per_page = 4
const initialState = {starting_index: 0, ending_index:projects_per_page - 1}
function reducer(state, action) {
    switch(action.type) {
      case 'SWITCH':
        const start = action.index * projects_per_page
        const end = start + projects_per_page - 1
        console.log(start)
        console.log(end)
        return {starting_index: start, ending_index:end}
      default:
        return state
    }
}

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
    const [state, dispatch] = useReducer(reducer, initialState);
    const [proj_split, setProject_split] = useState([])
    const max_pages = Math.ceil(projects.length / projects_per_page)
    const [page_numbers, setPageNumbers] = useState([...Array(max_pages).keys()]);
    const [selected_page, setSelectedPage] = useState(0)
    const project_page = (page_number) => {
      dispatch({type:'SWITCH', index: page_number})
    };
    useEffect(()=>{
      const pro = projects.filter((_, index) => index >= state.starting_index && index <= state.ending_index);
      setProject_split(pro);
    }, [state]);
    
    return (
        <Layout>
        <div style={{ minHeight: "50vh",display: "grid", gridTemplateRows: "92% 8%" }}>
            <div className="project-container">
                <div className="projects-list">
                    {proj_split.map((project, index) =>  (
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
                    )
                    )}
                </div>
            </div>
            <div style={{  
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", // Center content horizontally
                paddingBottom:"40px"
              }}>
                <ul style={{ 
                  display: "flex", 
                  listStyle: "none", 
                  padding: 0, 
                  margin: 0,
                  gap: "10px" // Adds spacing between numbers
                }}>
                  {page_numbers.map((num) => (
                    <li key={num} className="page-item" style={{backgroundColor: selected_page === num ? "#e8eae9" : "white"}} onClick={()=>{
                      setSelectedPage(num)
                      project_page(num)}}>
                      {num}
                    </li>
                  ))}
                </ul>
            </div>

          </div>
        </Layout>
    );
};

export default Project;
