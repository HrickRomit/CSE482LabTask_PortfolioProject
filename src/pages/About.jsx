import hobbies from "../assets/hobbies.jpeg";
import programming from "../assets/programming.jpg";
import school from "../assets/school.jpg";
import skillsImage from "../assets/skils.webp";

function About() {
  return (
    <>
      <main className="content">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          About Me
        </h1>

        <div className="row g-4">
          <div className="col-md-6 col-lg-6">
            <div
              className="card h-100 card-hover"
              data-bs-toggle="modal"
              data-bs-target="#educationModal"
              style={{ cursor: "pointer" }}
            >
              <img src={school} className="card-img" alt="Education" />
              <div className="card-img-overlay d-flex align-items-end">
                <div>
                  <h5 className="card-title text-white">My Education</h5>
                  <p className="card-text text-white">Click to learn more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div
              className="card h-100 card-hover"
              data-bs-toggle="modal"
              data-bs-target="#hobbiesModal"
              style={{ cursor: "pointer" }}
            >
              <img src={hobbies} className="card-img" alt="Hobbies" />
              <div className="card-img-overlay d-flex align-items-end">
                <div>
                  <h5 className="card-title text-white">My Hobbies</h5>
                  <p className="card-text text-white">Click to learn more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div
              className="card h-100 card-hover"
              data-bs-toggle="modal"
              data-bs-target="#interestsModal"
              style={{ cursor: "pointer" }}
            >
              <img src={programming} className="card-img" alt="Programming" />
              <div className="card-img-overlay d-flex align-items-end">
                <div>
                  <h5 className="card-title text-white">
                    Programming Interests
                  </h5>
                  <p className="card-text text-white">Click to learn more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div
              className="card h-100 card-hover"
              data-bs-toggle="modal"
              data-bs-target="#skillsModal"
              style={{ cursor: "pointer" }}
            >
              <img src={skillsImage} className="card-img" alt="Skills" />
              <div className="card-img-overlay d-flex align-items-end">
                <div>
                  <h5 className="card-title text-white">
                    Skills I'm Learning
                  </h5>
                  <p className="card-text text-white">Click to learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        className="modal fade"
        id="educationModal"
        tabIndex="-1"
        aria-labelledby="educationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="educationModalLabel">
                My Education
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h6 className="mb-3">University</h6>
              <p>
                <strong>North South University</strong>
              </p>
              <p>
                Currently pursuing my degree in Computer Science and
                Engineering (CSE).
              </p>

              <hr />

              <h6 className="mb-3">School</h6>
              <p>
                <strong>St. Joseph School</strong>
              </p>
              <p>
                Completed my school education where I developed a passion for
                technology and coding.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="hobbiesModal"
        tabIndex="-1"
        aria-labelledby="hobbiesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="hobbiesModalLabel">
                My Hobbies
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="badge bg-primary me-2">1</span>
                  <strong>Procrastinating</strong> - A special talent of mine!
                </li>
                <li className="list-group-item">
                  <span className="badge bg-primary me-2">2</span>
                  <strong>Playing Video Games</strong> - My favorite way to
                  unwind
                </li>
                <li className="list-group-item">
                  <span className="badge bg-primary me-2">3</span>
                  <strong>Watching AI Videos</strong> - Keeping up with the
                  future!
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="interestsModal"
        tabIndex="-1"
        aria-labelledby="interestsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="interestsModalLabel">
                Programming Interests
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>I am passionate about:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>AI/ML Development</strong> - Creating intelligent
                  systems
                </li>
                <li className="list-group-item">
                  <strong>Learning New Technologies</strong> - Always staying
                  updated
                </li>
                <li className="list-group-item">
                  <strong>System Design</strong> - Understanding how systems
                  work and are built efficiently
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="skillsModal"
        tabIndex="-1"
        aria-labelledby="skillsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="skillsModalLabel">
                Skills I'm Currently Learning
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-success">Computer Architecture</span>
                <span className="badge bg-success">Automation</span>
                <span className="badge bg-success">SAAS</span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
