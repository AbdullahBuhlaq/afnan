import { useEffect } from "react";

function Services(props) {
  useEffect(() => {
    props.setCurrentTab("services");
  }, []);
  try {
    return (
      <>
        <div className="dash">
          <section className="sub-banner" data-stellar-background-ratio="0.5">
            <div className="overlay">
              <div className="container">
                <h3>SERVICES US</h3>
                <p>Meet our team of highly skilled professionals</p>

                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">SERVICES</li>
                </ol>
              </div>
            </div>
          </section>

          <div className="content fix-nav-space">
            <div className="services-about ser-style-2">
              <div className="container">
                <div className="tittle tittle-2">
                  <h3>Our Services</h3>
                  <hr />
                  <p>Claritas est etiam processus dynamicus, qui sequ itur mutationem consuetudium lectorum.</p>
                </div>
                <ul className="row">
                  <li className="col-sm-4">
                    <div className="slide sec-ser">
                      <i className="fa fa-stethoscope"></i>
                      <h6>Full Stethoscope</h6>
                      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
                    </div>
                  </li>

                  <li className="col-sm-4">
                    <div className="slide sec-ser">
                      <i className="fa fa-user-md"></i>
                      <h6>Exprienced Doctors</h6>
                      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
                    </div>
                  </li>

                  <li className="col-sm-4">
                    <div className="slide sec-ser">
                      <i className="fa fa-tint"></i>
                      <h6>Blood Bank</h6>
                      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div id="counters" data-stellar-background-ratio="0.5">
              <div className="overlay">
                <div className="container">
                  <ul className="row">
                    <li className="col-sm-3">
                      <i className="fa fa-smile-o"></i> <span className="count1">9501</span>
                      <p>DISCHARGED</p>
                    </li>

                    <li className="col-sm-3">
                      <i className="fa fa-bed"></i> <span className="count2">38</span>
                      <p>BEDS</p>
                    </li>

                    <li className="col-sm-3">
                      <i className="fa fa-user-md"></i> <span className="count3">572</span>
                      <p>DOCTORS</p>
                    </li>
                    <li className="col-sm-3">
                      <i className="fa fa-ambulance"></i> <span className="count4">14</span>
                      <p>AMBULANCES</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="pop-open" className="zoom-anim-dialog mfp-hide pop-open-style">
              <div className="pop_up">
                <div className="col-sm-6 no-padding">
                  <img className="img-responsive" src="images/doctor-1-1.jpg" alt="" />
                </div>
                <div className="col-md-6 no-padding">
                  <div className="doctor-in">
                    <h4>Jane Butler</h4>
                    <span>X-ray</span>
                    <div className="personal-info">
                      <ul>
                        <li className="col-sm-4">
                          <strong>Education </strong>
                        </li>
                        <li className="col-sm-8">MD, OB/GYN</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Experience </strong>
                        </li>
                        <li className="col-sm-8">2 years</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Office </strong>
                        </li>
                        <li className="col-sm-8">Office 12b, Hall A</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Work days </strong>
                        </li>
                        <li className="col-sm-8">Monday, Friday, Sunday</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Email </strong>
                        </li>
                        <li className="col-sm-8">janebutler@medikalclinic.com</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Trainning </strong>
                        </li>
                        <li className="col-sm-8">
                          Nam liber tempor cum soluta nobis eleif end option congue nihil impedo mingid quod mazim placerat facer <br />
                          <br />
                          Nulla vitae elit libero, a pharetra augue uris id Integer posuere erat
                        </li>
                      </ul>

                      <ul className="margin-t-20">
                        <li className="col-sm-4">
                          <strong className="t-10">Social info </strong>
                        </li>
                        <li className="col-sm-8">
                          <ul className="social_icons">
                            <li className="facebook">
                              <a href="#.">
                                <i className="fa fa-facebook"></i>{" "}
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#.">
                                <i className="fa fa-twitter"></i>{" "}
                              </a>
                            </li>
                            <li className="linkedin">
                              <a href="#.">
                                <i className="fa fa-linkedin"></i>{" "}
                              </a>
                            </li>
                            <li className="googleplus">
                              <a href="#.">
                                <i className="fa fa-google-plus"></i>{" "}
                              </a>
                            </li>
                            <li className="skype">
                              <a href="#.">
                                <i className="fa fa-skype"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <a href="#." className="table-link">
                        View timetable <i className="fa fa-arrow-circle-o-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="pop-open-1" className="zoom-anim-dialog mfp-hide pop-open-style">
              <div className="pop_up">
                <div className="col-sm-6 no-padding">
                  <img className="img-responsive" src="images/doctor-2-2.jpg" alt="" />
                </div>
                <div className="col-md-6 no-padding">
                  <div className="doctor-in">
                    <h4>Lynn Lambert</h4>
                    <span>Cardiology</span>
                    <div className="personal-info">
                      <ul>
                        <li className="col-sm-4">
                          <strong>Education </strong>
                        </li>
                        <li className="col-sm-8">MD, OB/GYN</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Experience </strong>
                        </li>
                        <li className="col-sm-8">2 years</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Office </strong>
                        </li>
                        <li className="col-sm-8">Office 12b, Hall A</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Work days </strong>
                        </li>
                        <li className="col-sm-8">Monday, Friday, Sunday</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Email </strong>
                        </li>
                        <li className="col-sm-8">janebutler@medikalclinic.com</li>
                      </ul>
                      <ul>
                        <li className="col-sm-4">
                          <strong>Trainning </strong>
                        </li>
                        <li className="col-sm-8">
                          Nam liber tempor cum soluta nobis eleif end option congue nihil impedo mingid quod mazim placerat facer <br />
                          <br />
                          Nulla vitae elit libero, a pharetra augue uris id Integer posuere erat
                        </li>
                      </ul>

                      <ul className="margin-t-20">
                        <li className="col-sm-4">
                          <strong className="t-10">Social info </strong>
                        </li>
                        <li className="col-sm-8">
                          <ul className="social_icons">
                            <li className="facebook">
                              <a href="#.">
                                <i className="fa fa-facebook"></i>{" "}
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#.">
                                <i className="fa fa-twitter"></i>{" "}
                              </a>
                            </li>
                            <li className="linkedin">
                              <a href="#.">
                                <i className="fa fa-linkedin"></i>{" "}
                              </a>
                            </li>
                            <li className="googleplus">
                              <a href="#.">
                                <i className="fa fa-google-plus"></i>{" "}
                              </a>
                            </li>
                            <li className="skype">
                              <a href="#.">
                                <i className="fa fa-skype"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <a href="#." className="table-link">
                        View timetable <i className="fa fa-arrow-circle-o-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section id="prople-says" data-stellar-background-ratio="0.5">
              <div className="overlay">
                <div className="container">
                  <div className="tittle tittle-2">
                    <h3>what patients say about us</h3>
                  </div>
                  <div className="qou">
                    <i className="fa fa-quote-left"></i>
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="testi">
                    <div className="testi-slide">
                      <div className="item">
                        <p>Excepteur sint cupidatat non proident, sunt ieserunt mollit anim id occaecat cupidatat non proident, sunt ieserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus occaecat cupidatat nonerror</p>
                        <div className="avatar">
                          <img src="images/avatar-1.jpg" alt="" />
                        </div>
                        <h5>JHON CORNNER</h5>
                        <span>Ophthalmology DEOARTMENT</span>
                      </div>
                      <div className="item">
                        <p>Excepteur sint cupidatat non proident, sunt ieserunt mollit anim id occaecat cupidatat non proident, sunt ieserunt mollit anim id est laborum. Sed ut perspiciatis est laborum. Sed ut perspiciatis unde omnis iste natus occaecat cupidatat nonerror</p>
                        <div className="avatar">
                          <img src="images/avatar-2.jpg" alt="" />
                        </div>
                        <h5>CORNNER JHON</h5>
                        <span>DENTAL DEOARTMENT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-info">
              <div className="container">
                <ul className="row">
                  <li className="col-md-3">
                    <i className="ion-ios-location-outline"></i>
                    <h5>Address</h5>
                    <p>1800 Abbot Kinney Blvd. Unit D & E Venice, CA 90291</p>
                  </li>

                  <li className="col-md-3">
                    <i className="ion-iphone"></i>
                    <h5>Hotline</h5>
                    <p>+00-0122-123-0089</p>
                  </li>

                  <li className="col-md-3">
                    <i className="ion-ios-email-outline"></i>
                    <h5>Email contact</h5>
                    <p>medikal@gmail.com</p>
                    <p>contact@medikalclinic.com</p>
                  </li>

                  <li className="col-md-3">
                    <i className="ion-earth"></i>
                    <h5>Website</h5>
                    <p>www.medikalclinic.com</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Services;
