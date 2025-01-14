import Navbar from "../Homepage/Navbar/Navbar";
import "./teachers.css";

const Teachers = () => {
  const teacher = [
    {
      id: 1,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtb5QaQwe3ddFufEWNmhpZenv3t1gjA0vvQ&s",
      name: "Franko Baresi",
      occupation: "Web Designer",
    },
    {
      id: 2,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtb5QaQwe3ddFufEWNmhpZenv3t1gjA0vvQ&s",
      name: "Carles Puol",
      occupation: "Web Designer",
    },
    {
      id: 3,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtb5QaQwe3ddFufEWNmhpZenv3t1gjA0vvQ&s",
      name: "Paolo Maldini",
      occupation: "Web Designer",
    },
    {
      id: 4,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtb5QaQwe3ddFufEWNmhpZenv3t1gjA0vvQ&s",
      name: "Japp Stam",
      occupation: "Web Designer",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="teacher">TEACHERS</div>
      <h1 className="meet-teacher">Meet Our Teachers</h1>

      <div className="main-t-div">
        {teacher.map((teacher) => (
          <div className="teacher-div" key={teacher.id}>
            <img
              src={teacher.imgSrc}
              alt={teacher.name}
              className="teacher-img"
            />

            <div className="t-description">
              <section className="vacancy c-margin c-flex">
                <span className="t-margin">{teacher.name}</span>
                <span>{teacher.occupation}</span>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teachers;
