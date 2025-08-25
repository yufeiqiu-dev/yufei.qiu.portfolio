// src/data/projectsData.js
export const projectsData = [
  {
    title: "Networking Router Project",
    category: "Networking",
    author: "Yufei Qiu, Dylan Li, Daniel Castro, Juan Esteban Guevara",
    body: "Built a software-based NAT router in C that handles IP packet forwarding using raw sockets, with full support for ICMP, TCP, and UDP traffic. Implemented a custom DHCP server with dynamic IP allocation and persistent lease assignment, along with a NAT table and timeout logic to manage address translation and port mapping."
  },
  {
    title: "Music Genre Classification based on Text",
    category: "Machine Learning",
    author: "Yufei Qiu, Joel Quan, Yatian Lai",
    body: "Developed a multi-class music genre classifier for song lyrics using transformer-based models (BERT) and LSTM/GRU with GloVe embeddings. Preprocessed 10K+ lyrics and fine-tuned models to achieve 73% accuracy, comparing performance across architectures and conducting error analysis for improvement."
  },
  {
    title: "Music Genre Classification based on Audio",
    category: "Machine Learning",
    author: "Yufei Qiu, Maanas Karwa, Samantha Sudhoff, Yatian Lai, Siddharth Prabakar",
    body: "Trained multiple machine learning models (KNN, SVM, XGBoost, Random Forest) to improve classification performance. Hypertuned parameters and optimized using PCA, ensemble methods, and more."
  },
  {
    title: "Scala Compiler Project",
    category: "Compilers",
    body: "Developed a Scala compiler with optimizations, including CPS translation. Implemented features such as arithmetic operations, error handling, type checking, memory allocation, and garbage collection."
  },
  {
    title: "Teacher-Student Web Manager",
    category: "Web Development",
    body: "Re-implemented an interactive teacher-student app using React with backend functions and secure PostgreSQL database. Supports student and teacher registration, quiz management, and data visualization.",
    link: "https://github.com/Lilflyy/cs348Project"
  },
  {
    title: "System Task Monitor",
    category: "GUI Applications",
    author: "Yufei Qiu, Phillip Bernwagner, Nick Myrick",
    body: "Developed a Unix-like system task monitor using C and GTK 3.0 for GUI. Displays running processes, memory maps, open file descriptors, and real-time CPU utilization in a tree structure."
  },
  {
    title: "Binary CNN Classifier",
    category: "Machine Learning",
    body: "Built a binary classifier using PyTorch CNN to distinguish between real photos and art drawings. Achieved 80% validation accuracy.",
    link: "https://github.com/Lilflyy/BinaryImageClassifier"
  },
  {
    title: "Networking HTTP/HTTPS Project",
    category: "Networking",
    body: "Developed a web server capable of handling HTTP/HTTPS requests efficiently, with support for directory browsing and concurrency, ensuring secure communication with TLS."
  },
  {
    title: "Unix Shell (Lex, Yacc, C)",
    category: "Systems Programming",
    body: "Designed and implemented a custom Unix shell supporting command execution, process management, I/O redirection, signals, sub-shells, wildcarding, and history tracking."
  },
  {
    title: "Dynamic Memory Allocator (malloc) in C",
    category: "Systems Programming",
    body: "Implemented a custom dynamic memory allocator inspired by standard `malloc` and `free` functions. Features buddy block structure, free block coalescing, and performance optimizations."
  },
  {
    title: "File Compression Project (2022)",
    category: "Systems Programming",
    body: "Implemented Huffman Compression Tree structure to reduce file size by more than 50%."
  },
  {
    title: "Teacher-Student Interactive APP (2021)",
    category: "Education Tools",
    author: "Yufei Qiu, Phillip Bernwagner, Denis Kilseev, Winston Ngo",
    body: "Developed a multi-threaded interactive app for teachers and students. Features include quiz creation, grading, and user authentication with object-based file storage."
  }
];
