import { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype, FaGooglePlus, FaDribbble, FaFlickr } from "react-icons/fa";

function ContactUs(props) {
  useEffect(() => {
    props.setCurrentTab("contactUs");
  }, []);
  try {
    return (
      <>
        <div className="dash">
          <div className="content fix-nav-space">
            <section className="sub-banner" data-stellar-background-ratio="0.5">
              <div className="overlay">
                <div className="container">
                  <h3>Contact us</h3>
                  <p>Feel Free Contact us</p>

                  <ol className="breadcrumb">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li className="active">CONTACT</li>
                  </ol>
                </div>
              </div>
            </section>

            <div className="contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h4>Message for us</h4>

                    <div className="contact-form">
                      <div id="contact_message" className="success-msg">
                        <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted
                      </div>
                      <form role="form" id="contact_form" className="contact-form" method="post" onSubmit="return false">
                        <ul className="row">
                          <li className="col-sm-6">
                            <label>
                              full name *
                              <input type="text" className="form-control" name="name" id="name" placeholder="" />
                            </label>
                          </li>
                          <li className="col-sm-6">
                            <label>
                              Email *
                              <input type="text" className="form-control" name="email" id="email" placeholder="" />
                            </label>
                          </li>
                          <li className="col-sm-6">
                            <label>
                              Phone *
                              <input type="text" className="form-control" name="company" id="company" placeholder="" />
                            </label>
                          </li>
                          <li className="col-sm-6">
                            <label>
                              Department
                              <input type="text" className="form-control" name="website" id="website" placeholder="" />
                            </label>
                          </li>
                          <li className="col-sm-12">
                            <label>
                              Message
                              <textarea className="form-control" name="message" id="message" rows="5" placeholder=""></textarea>
                            </label>
                          </li>
                          <li className="col-sm-12">
                            <button
                              type="submit"
                              value="submit"
                              className="btn"
                              id="btn_submit"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Submit
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <h4>Our Timing</h4>
                    <div className="timing">
                      <p>
                        Mon to Fri <span> 8:00 am to 7:00pm</span>
                      </p>
                      <p>
                        Sat <span>9:00 am to 5:00pm</span>
                      </p>
                      <p>
                        Sun <span>Closed</span>
                      </p>
                    </div>

                    <h4>Follow Us</h4>

                    <ul className="social_icons">
                      <li className="facebook">
                        <a href="#.">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#.">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="#.">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="skype">
                        <a href="#.">
                          <FaSkype />
                        </a>
                      </li>
                      <li className="dribbble">
                        <a href="#.">
                          <FaDribbble />
                        </a>
                      </li>
                      <li className="googleplus">
                        <a href="#.">
                          <FaGooglePlus />
                        </a>
                      </li>
                      <li className="flickr">
                        <a href="#.">
                          <FaFlickr />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="map" className="g_map"></div>

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

export default ContactUs;
