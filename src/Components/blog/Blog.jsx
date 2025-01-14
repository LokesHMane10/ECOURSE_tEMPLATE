import Navbar from "../Homepage/Navbar/Navbar";
import "./blog.css";

const Blogs = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    course: "DEV OPS",
    description: "Jan 01,2050",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    course: "Web Design",
    description: "Jan 01,2050",
  },
  {
    id: 3,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    course: "Cyber Security",
    description: "Jan 01,2050",
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="subject">BLOG</div>
      <h1 className="explore-sub">Latest From Our Blog</h1>
      <div className="subject-wrapper">
        {Blogs.map((subject) => (
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

export default Blog;
