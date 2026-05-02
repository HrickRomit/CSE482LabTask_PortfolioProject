function Contact() {
  return (
    <main className="content">
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <h4>Feel free to reach out to me!</h4>

      <div className="row mb-3">
        <label htmlFor="emailInput" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-8">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter your email"
          />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="facebookInput" className="col-sm-2 col-form-label">
          Facebook
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="facebookInput"
            placeholder="Enter your message"
          />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
      <p>
        Or visit my Facebook profile:{" "}
        <a href="https://www.facebook.com/hrickromit">Hrick Romit</a>
      </p>

      <div className="row mb-3">
        <label htmlFor="linkedinInput" className="col-sm-2 col-form-label">
          LinkedIn
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="linkedinInput"
            placeholder="Enter your message"
          />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
      <p>
        Or visit my LinkedIn profile:{" "}
        <a href="https://www.linkedin.com/in/hrickromit">Hrick Romit</a>
      </p>
    </main>
  );
}

export default Contact;
