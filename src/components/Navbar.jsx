import { useTheme } from "../ThemeContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar({ currentPage, onNavigate }) {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          type="button"
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => onNavigate("home")}
        >
          Hrick Romit
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary ms-2"
          onClick={toggleTheme}
          aria-label="Toggle color scheme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`btn ${currentPage === item.id
                    ? "btn-primary"
                    : "btn-outline-primary"
                  }`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
