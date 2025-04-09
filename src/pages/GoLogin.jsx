function GoLogin() {
  return (
    <>
      <div className="dash">
        <div className="error-page">
          <section className="sub-banner" data-stellar-background-ratio="0.5">
            <div className="overlay">
              <div className="container">
                <h3>Login Required</h3>
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
                    You Should Login to Access This Page
                  </span>
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

export default GoLogin;
