function GoLogin() {
  return (
    <>
      <div className="dash">
        <div className="error-page">
          <section class="sub-banner" data-stellar-background-ratio="0.5">
            <div class="overlay">
              <div class="container">
                <h3>Login Required</h3>
                <p>Provide useful information on health and wellness</p>
              </div>
            </div>
          </section>

          <section class="error-page">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 text-center">
                  {" "}
                  <span class="not-found font-montserrat">You Should Login to Access This Page</span>
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
