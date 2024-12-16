import Navbar from "../Homepage/Navbar/Navbar";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="main-s-div">
        <section className="main-s-section  ">
          <div className="need-course">NEED ANY COURSE</div>
          <div className="offer"> 30% Off For New Students</div>
          <div className="course-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in
            ipsum dolor sit amet consectetur commodi magnam iste error
            quibusdam?
          </div>
          <div className="course-sepcial">
            <span>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur.
            </span>
            <span>
              <i class="fa-solid fa-check"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
            <span>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit.
            </span>
          </div>
        </section>

        {/* /////////////////////// */}
        <section className="main-s-section login-sec">
          <div className="sign-up"> Sign Up Now</div>
          <div className="form">
            <form action="">
              <input type="text" placeholder="enter your name here" />
              <input type="email" placeholder="enter your mail here" />
              <select>
                <option value="">select course</option>
                <option value="">Web design</option>
                <option value="">Big Data Analysis</option>
                <option value="">Data Science</option>
              </select>
              <button>
                <span className="button-span">Sign Up Now</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
