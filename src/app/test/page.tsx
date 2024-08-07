import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            MySite
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron text-center bg-primary text-white p-5 mb-4">
        <div className="container">
          <h1 className="display-4">Welcome to My Landing Page</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <a className="btn btn-light btn-lg" href="#learn-more" role="button">
            Learn more
          </a>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              className="rounded-circle mb-3"
              alt="feature 1"
            />
            <h3>Feature 1</h3>
            <p>Short description of the feature.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              className="rounded-circle mb-3"
              alt="feature 2"
            />
            <h3>Feature 2</h3>
            <p>Short description of the feature.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              className="rounded-circle mb-3"
              alt="feature 3"
            />
            <h3>Feature 3</h3>
            <p>Short description of the feature.</p>
          </div>
        </div>
      </div>

      <div id="pricing" className="container mt-5 text-center">
        <h2>Pricing</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Basic Plan</h5>
                <h6 className="card-price">$19/month</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Pro Plan</h5>
                <h6 className="card-price">$49/month</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact" className="bg-dark text-white text-center p-5 mt-5">
        <div className="container">
          <h5>Contact Us</h5>
          <p className="mb-4">
            Wed love to hear from you! Reach out to us with any questions or
            feedback.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card bg-secondary text-white h-100">
                <div className="card-body">
                  <h6 className="card-title">Email</h6>
                  <p className="card-text">support@mysite.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-secondary text-white h-100">
                <div className="card-body">
                  <h6 className="card-title">Phone</h6>
                  <p className="card-text">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a href="#" className="btn btn-outline-dark btn-sm mx-1">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="btn btn-outline-dark btn-sm mx-1">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline-dark btn-sm mx-1">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="btn btn-outline-dark btn-sm mx-1">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <p className="mt-4 mb-0">© 2024 MySite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
