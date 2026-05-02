import firstProject from "../assets/1stProject.png";
import secondProject from "../assets/2nd project.webp";
import thirdProject from "../assets/3rd project.jpg";

function Projects() {
  return (
    <main className="content">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        My Projects
      </h1>
      <h4 style={{ marginBottom: "30px" }}>Take a look at my works here</h4>

      <div id="projectsCarousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Movie Streaming App"
          />
          <button
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide-to="1"
            aria-label="Algorithm Visualizer"
          />
          <button
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide-to="2"
            aria-label="ChatBot"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={firstProject}
              className="d-block w-100"
              alt="Movie Streaming App"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
              <h5 className="text-danger fs-3 fw-bold">
                Movie Streaming App
              </h5>
              <p className="text-white">
                A Movie Streaming website built with HTML, CSS, and JavaScript.
              </p>
              <p>
                <small>
                  <a
                    href="https://github.com/HrickRomit/Movie_Streaming_app"
                    className="link-light"
                  >
                    View on GitHub
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={secondProject}
              className="d-block w-100"
              alt="Algorithm Visualizer"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
              <h5 className="text-danger fs-3 fw-bold">
                Algorithm Visualizer
              </h5>
              <p className="text-white">
                A tool for visualizing sorting and searching algorithms. (Half
                way done and now I am procrastinating)
              </p>
              <p>
                <small>
                  <a
                    href="https://github.com/HrickRomit/Algorithm_Visualizer"
                    className="link-light"
                  >
                    View on GitHub
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={thirdProject} className="d-block w-100" alt="ChatBot" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
              <h5 className="text-danger fs-3 fw-bold">ChatBot</h5>
              <p className="text-white">A simple chatBot using local AI</p>
              <p>
                <small>
                  <a
                    href="https://github.com/HrickRomit/OllamaChatBOT"
                    className="link-light"
                  >
                    View on GitHub
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

export default Projects;
