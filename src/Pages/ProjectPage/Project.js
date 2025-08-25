import { useState, useEffect, useReducer } from 'react';
import { projectsData } from '../../data/projects';
import Layout from '../../components/Layout';
import './projects.css'

const PROJECTS_PER_PAGE = 4;
const initialState = { start: 0, end: PROJECTS_PER_PAGE };

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      const start = action.page * PROJECTS_PER_PAGE;
      const end = start + PROJECTS_PER_PAGE;
      return { start, end };
    default:
      return state;
  }
}

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [state, dispatch] = useReducer(reducer, initialState);

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  const maxPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  useEffect(() => {
    const result = selectedCategory === "All"
      ? projectsData
      : projectsData.filter(p => p.category === selectedCategory);
    setFilteredProjects(result);
    dispatch({ type: 'SWITCH', page: 0 });
  }, [selectedCategory]);

  const paginated = filteredProjects.slice(state.start, state.end);

  return (
    <Layout>
      <div className="app-content" style={{ padding: "1rem" }}>
        <div className='project-container'>
        <div className="category-buttons sticky-bar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                margin: "0.3rem",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                backgroundColor: selectedCategory === cat ? "#007bff" : "#f0f0f0",
                color: selectedCategory === cat ? "#fff" : "#333",
                border: "none",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {paginated.map((p, i) => (
            <div key={i} className="project-item" style={{
              background: "#fff",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "12px",
              boxShadow: "0 0 12px rgba(0,0,0,0.05)"
            }}>
              <h2>{p.title}</h2>
              <div className="meta">
                {p.author && <p><strong>Author:</strong> {p.author}</p>}
              </div>
              <p>{p.body}</p>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {[...Array(maxPages).keys()].map(page => (
            <button
              key={page}
              onClick={() => dispatch({ type: 'SWITCH', page })}
              style={{
                margin: "0.3rem",
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                backgroundColor: state.start / PROJECTS_PER_PAGE === page ? "#ccc" : "#eee",
                border: "1px solid #ddd",
                cursor: "pointer"
              }}
            >
              {page + 1}
            </button>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
