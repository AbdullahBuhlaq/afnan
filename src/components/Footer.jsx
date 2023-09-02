import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  try {
    return (
      <>
        <div className="dash">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="latest-tweet">
                    <h5>Latest tweets</h5>
                    <ul>
                      <li>
                        <p>
                          <span>@medikal</span> Sweets and Bakers WordPress Theme' on @EnvatoMarket by themefore<a href="#.">http://t.co/we8Kf0</a>
                        </p>
                        <span className="date"> - Thursday April 9, 2015</span>
                      </li>

                      <li>
                        <p>
                          <span>@medikal</span> In hendrerit in molestie consequat in <a href="#."> http://t.co/we8Kf0</a>
                        </p>
                        <span className="date"> - Thursday April 9, 2015</span>
                      </li>

                      <li>
                        <p>
                          <span>@medikal</span> Duis autem vel eum iriure
                          <span>@medikal</span> dolor in hendrerit in molestie consequat <a href="#."> http://t.co/we8Kf0</a>
                        </p>
                        <span className="date"> - Thursday April 9, 2015</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="small-info">
                    <img src="images/logo-white.png" alt="" />
                    <p>We work in a friendly and efficient using the latest technologies and sharing our expertise to make a diagnosis and implement cutting-edge therapies.</p>
                    <ul className="social_icons">
                      <li className="facebook">
                        <a href="#.">
                          <FaFacebookF />{" "}
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#.">
                          <AiOutlineTwitter />{" "}
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="#.">
                          <FaLinkedinIn />{" "}
                        </a>
                      </li>
                    </ul>

                    <h5>register newsletter</h5>
                    <form>
                      <input type="email" placeholder="Enter your email here" required />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="links text-right">
                    <h5>Patient Guide</h5>
                    <ul>
                      <li>
                        <a href="#."> Choosing a doctor</a>
                      </li>
                      <li>
                        <a href="#."> Health journals</a>
                      </li>
                      <li>
                        <a href="#."> Insurance converage</a>
                      </li>
                      <li>
                        <a href="#."> Talking to your doctor</a>
                      </li>
                      <li>
                        <a href="#."> Medikal error</a>
                      </li>
                    </ul>

                    <div className="timing">
                      <h5>opening hours</h5>
                      <p>
                        Mon to Fri <span> 8:00 am to 7:00pm</span>
                      </p>
                      <p>
                        Sun & Sat <span>9:00 am to 5:00pm</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rights">
              <p>© 2023 Medikal. Made with by Afnan</p>
            </div>
          </footer>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Footer;
