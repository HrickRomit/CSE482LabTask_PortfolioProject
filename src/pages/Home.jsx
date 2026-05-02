import pfp from "../assets/pfp.jpg";

function Home() {
  return (
    <main className="content">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 fade-up">
          <h1 className="mb-3">My name is Hrick Romit </h1>
          <h2 className="mb-3">A true vibe coder</h2>
          <h3 className="mb-3">CSE student | Aspiring Software Engineer</h3>
          <p className="fs-5 mb-0">
            Go through my other pages to learn more about me!
          </p>
        </div>

        <div className="col-12 col-lg-6 text-center fade-up">
          <img
            src={pfp}
            alt="Hrick Romit profile"
            className="img-fluid mx-auto"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
