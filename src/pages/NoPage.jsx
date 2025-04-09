function NoPage() {
  return (
    <>
      <div className="dash">
        <div className="error-page">
          <section className="sub-banner" data-stellar-background-ratio="0.5">
            <div className="overlay">
              <div className="container">
                <h3>404</h3>
                <p>Provide useful information on health and wellness</p>
              </div>
            </div>
          </section>

          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  {" "}
                  <span className="not-found font-montserrat">
                    page not found
                  </span>{" "}
                  <span className="head-404 font-montserrat">404</span>
                  <h4>Page doesn’t exist or other error occured.</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
        ;
      </div>
    </>
  );
}

export default NoPage;
