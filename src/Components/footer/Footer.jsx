import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <section className="get-in-touch ">
            <span className="f-heading color">Get In Touch</span>
            <span className="g-margin">123 Street, Pune</span>
            <span className="g-margin">789461323</span>
            <span className="g-margin">mail@gmail.com</span>
            <span className="social-media">
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </span>
          </section>
          <section className="get-in-touch">
            <span className="f-heading color">OUR COURSES</span>
            <span className="web-margin">
              {" "}
              <i class="fa-solid fa-chevron-right"></i>web design
            </span>
            <span className="web-margin">
              <i class="fa-solid fa-chevron-right"></i>Apps Design
            </span>
            <span className="web-margin">
              <i class="fa-solid fa-chevron-right"></i>Marketing
            </span>
            <span className="web-margin">
              <i class="fa-solid fa-chevron-right"></i>Research
            </span>
            <span className="web-margin">
              <i class="fa-solid fa-chevron-right"></i>SEO
            </span>
          </section>
          <section className="get-in-touch">
            <span className="f-heading color">NEWSLETTER</span>
            <span className="news-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, itaque. Nulla explicabo voluptates repellendus
              corrupti! Labore veniam cumque harum tenetur.
            </span>
            <div class="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="submit">Sign-up</button>
            </div>
          </section>
        </div>

        {/* /////////////////////// */}
        <div className="line-break"></div>
        {/* //////////////////////// */}
        <div className="all-rights">
          <span>
            <span className="color">@ Domain Name.</span> All Rights Reserved.
            Designed by <span className="color">React.JS</span>
          </span>
          <span className="terms">
            <span>Privacy</span>
            <span>Terms</span>
            <span>FAQs</span>
            <span>Help</span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
