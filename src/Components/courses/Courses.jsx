import Navbar from "../Homepage/Navbar/Navbar";
import "./courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      students: "25 students",
      duration: "3 months",
      name: "Web Design & Development Courses for Beginners",
      rating: "4.5 stars",
      price: "$199",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      students: "30 students",
      duration: "6 weeks",
      name: "Introduction to Graphic Design",
      rating: "4.7 stars",
      price: "$149",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U0VPfGVufDB8fDB8fHww",
      students: "20 students",
      duration: "4 months",
      name: "Full-Stack Web Development Bootcamp",
      rating: "4.8 stars",
      price: "$299",
    },
    {
      id: 1,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
      students: "25 students",
      duration: "3 months",
      name: "Cyber Security",
      rating: "4.5 stars",
      price: "$199",
    },
    {
      id: 1,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUl8ZW58MHx8MHx8fDA%3D",
      students: "25 students",
      duration: "3 months",
      name: "Artificial Intelligence",
      rating: "4.5 stars",
      price: "$199",
    },
    {
      id: 1,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
      students: "25 students",
      duration: "3 months",
      name: "Cloud Developer",
      rating: "4.5 stars",
      price: "$199",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="course">COURSES</div>
      <h1 className="popular-course">Our Popular Courses</h1>

      <div className="main-c-div">
        {courses.map((course) => (
          <div className="course-div" key={course.id}>
            <img src={course.imgSrc} alt={course.name} className="course-img" />
            <div className="c-description">
              <section className="vacancy c-margin c-flex">
                <span>{course.students}</span>
                <span>{course.duration}</span>
              </section>
              <section className="course-name c-margin">{course.name}</section>
              <section className="rating c-margin c-flex">
                <span>{course.rating}</span>
                <span>{course.price}</span>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
