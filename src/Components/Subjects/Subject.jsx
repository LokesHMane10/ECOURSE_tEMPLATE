import Navbar from "../Homepage/Navbar/Navbar";
import "./subject.css";

const subjects = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww",
    course: "Web Design",
    description: "100 Courses",
  },
];

const Subject = () => {
  return (
    <>
      <Navbar />
      <div className="subject">SUBJECTS</div>
      <h1 className="explore-sub">Explore Top Subjects</h1>
      <div className="subject-wrapper">
        {subjects.map((subject) => (
          <div className="image" key={subject.id}>
            <img
              src={subject.imgSrc}
              alt={subject.course}
              className="subject-img"
            />
            <div className="subject-content">
              <span className="sub-desc">{subject.course}</span>
              <span>{subject.description}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subject;
