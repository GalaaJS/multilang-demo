'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('english');
  const [data, setData] = useState({} as { [key: string]: string });

  const changeTheme = (_language: string) => {
    setLanguage(_language);
  };

  useEffect(() => {
    if (language) getLanguage(language);
  }, [language]);

  const getLanguage = async (lang: string) => {
    const response = await fetch(
      `/api/data?project=0002&url=00001&lang=${lang}`
    );
    const data: { k: string; v: string }[] = await response.json();

    if (data) {
      const obj = data.reduce((acc: { [key: string]: string }, current) => {
        acc[current.k] = current.v;
        return acc;
      }, {});

      setData(obj);
    }
  };

  return (
    <>
      {/* Change language */}
      <div
        className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
        style={{ zIndex: 1 }}
      >
        <button
          className="btn btn-secondary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Change language (auto)"
        >
          <i className="bi bi-translate" style={{ fontSize: '1.25rem' }}></i>
          <span className="visually-hidden" id="bd-theme-text">
            Change language
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                language === 'english' ? 'active' : ''
              }`}
              onClick={() => changeTheme('english')}
            >
              English
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                language === 'french' ? 'active' : ''
              }`}
              onClick={() => changeTheme('french')}
            >
              French
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                language === 'spanish' ? 'active' : ''
              }`}
              onClick={() => changeTheme('spanish')}
            >
              Spanish
            </button>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand d-md-none" href="/">
            <i className="bi bi-translate"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                MultiLang
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="bi bi-translate"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    {data.S_11}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    {data.S_58}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#support">
                    {data.S_19}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    {data.S_2}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-light"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {data.S_61}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
          <div id="about" className="col-md-12 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">{data.S_1}</h1>
            <h3 className="fw-normal text-muted mb-3">{data.S_51}</h3>
          </div>
        </div>

        <div id="features" className="px-5 py-5">
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <h3>{data.S_52}</h3>
              <p>{data.S_55}</p>
            </div>
            <div className="col-md-4 text-center">
              <h3>{data.S_53}</h3>
              <p>{data.S_56}</p>
            </div>
            <div className="col-md-4 text-center">
              <h3>{data.S_54}</h3>
              <p>{data.S_57}</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5" id="support">
          <h2 className="pb-2 border-bottom text-center">{data.S_19}</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {data.S_8}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {data.S_9}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {data.S_10}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="bg-dark text-white text-center p-5 mt-5">
        <div className="container">
          <h5 className="mb-4">{data.S_2}</h5>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card bg-secondary text-white h-100">
                <div className="card-body">
                  <h6 className="card-title">{data.S_42}</h6>
                  <p className="card-text">galaa.purev@outlook.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-secondary text-white h-100">
                <div className="card-body">
                  <h6 className="card-title">{data.S_59}</h6>
                  <p className="card-text">(437) 422-4808</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://www.facebook.com/"
              className="btn btn-outline-light btn-sm mx-1"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://x.com/"
              className="btn btn-outline-light btn-sm mx-1"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/galaa/"
              className="btn btn-outline-light btn-sm mx-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              className="btn btn-outline-light btn-sm mx-1"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <p className="mt-4 mb-0">Galaa © 2024. {data.S_60}</p>
        </div>
      </footer>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {data.S_61}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">{data.S_62}</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">{data.S_63}</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {data.S_64}
              </button>
              <button type="button" className="btn btn-primary">
                {data.S_61}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
