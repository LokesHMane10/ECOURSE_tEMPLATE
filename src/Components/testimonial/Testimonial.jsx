import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">TETIMONIAL</div>
      <h1 className="t-heading">What Say Our Students</h1>
      <div className="t-emoji">
        <i className="fa-solid fa-quote-left" />
      </div>
      <p className="t-para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, autem
        corrupti! Sequi beatae a saepe molestiae? Deserunt quae repudiandae
        harum vel nostrum fugit reprehenderit eum similique quas ipsa doloribus
        autem, unde voluptatibus amet earum beatae praesentium quisquam libero
        placeat perferendis assumenda iure aliquam minus labore. Labore vero
        neque aliquam facere!
      </p>

      <section>
        <img
          src="https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww"
          alt=""
          className="t-image"
        />
        <p className="c-info">
          <span className="c-name">client name</span>
          <span>profession</span>
        </p>
      </section>
    </>
  );
};

export default Testimonial;
