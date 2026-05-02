function Skills() {
  return (
    <main className="content">
      <div className="text-center mb-5 fade-up">
        <h1 className="mb-3">My Skills</h1>
        <p className="fs-5">
          Technologies and tools I work with and currently explore.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-6 fade-up">
          <div className="card h-100 card-hover p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Programming Languages</h3>
              <p className="card-text mb-3">
                Languages I use to solve problems and build projects.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Python</span>
                <span className="badge bg-primary">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 fade-up">
          <div className="card h-100 card-hover p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Frontend</h3>
              <p className="card-text mb-3">
                Tools and technologies I use to design responsive user
                interfaces.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-success">HTML</span>
                <span className="badge bg-success">CSS</span>
                <span className="badge bg-success">Bootstrap</span>
                <span className="badge bg-success">React</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 fade-up">
          <div className="card h-100 card-hover p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Backend & Database</h3>
              <p className="card-text mb-3">
                Technologies I use for logic, data handling, and web
                applications.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-warning text-dark">Django</span>
                <span className="badge bg-warning text-dark">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 fade-up">
          <div className="card h-100 card-hover p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Tools & Workflow</h3>
              <p className="card-text mb-3">
                Platforms and tools that support my development process.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-dark">Git</span>
                <span className="badge bg-dark">GitHub</span>
                <span className="badge bg-dark">VS Code</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 fade-up">
          <div className="card card-hover p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Currently Learning</h3>
              <p className="card-text mb-3">
                Areas I am actively improving to grow as a software engineer.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-info text-dark">Automation</span>
                <span className="badge bg-info text-dark">SaaS</span>
                <span className="badge bg-info text-dark">
                  Computer Architecture
                </span>
                <span className="badge bg-info text-dark">System Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
