import { useEffect, useState } from "react";

function AboutUs(props) {
  useEffect(() => {
    props.setCurrentTab("aboutUs");
  }, []);
  let ser = [
    <>
      <i className="fa fa-tint"></i>
      <h6>Blood Bank</h6>
      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
    </>,
    <>
      <i className="fa fa-stethoscope"></i>
      <h6>Full Stethoscope</h6>
      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
    </>,
    <>
      <i className="fa fa-wheelchair"></i>
      <h6>For Disable</h6>
      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
    </>,
    <>
      <i className="fa fa-heartbeat"></i>
      <h6>Heart Specialest</h6>
      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
    </>,
    <>
      <i className="fa fa-user-md"></i>
      <h6>Exprienced Doctors</h6>
      <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.</p>
    </>,
  ];
  const [serv, setServ] = useState(0);
  try {
    return (
      <>
        <div className="dash">
          <div className="content fix-nav-space">
            <div className="control">
              <div className="card-content">
                <div className="card-subtitle">WORK EXPERIENCE (SWIPE UP FOR MORE)</div>
                <div className="card-timeline">
                  <div className="card-item" data-year="2018">
                    <div className="card-item-title">SPECIALIZED IN THE FIELD OF DESIGN FOR PRODUCTS, OFFERS, AND ADVERTISEMENTS</div>
                    <div className="card-item-desc">Had Worked with many institutions and private sectors in Syria and the Arab Gulf to create a distinct visual identity that presents their services and products clearly and attractively to develop their sales, expand the scope of their customers and enhance their confidence.</div>
                  </div>
                  <div className="card-item" data-year="2019">
                    <div className="card-item-title">PROGRAMMING AND DEVELOPMENT OF APPLICATIONS AND SPECIAL PERSONAL TOOLS</div>
                    <div className="card-item-desc">Develop applications by adding features, modifying them to reach the best user experience, and creating entirely new projects like the ones I provide in my store.</div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">BUSINESS AND DIGITAL MARKETING EXPERT</div>
                    <div className="card-item-desc">
                      I received intensive courses at the international level from Google and others to master this field and reach leadership. Then I developed the experience through practical experience of many platforms and stores, which helped them achieve high sales rates in a short time, and then their brand became more widely known .<br />
                      (you can access to my certificate from "More info" section)
                    </div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">PROJECT MANAGEMENT AND HUMAN RESOURCES MANAGER</div>
                    <div className="card-item-desc">
                      Through educational courses at the international level specializing in the field of project management and avoiding risks and allocating the place of each member of the project to suit him and employing his expertise in the best place; as a result, my absorptive capacity has grown to contain many practical applications on some ideas and small projects for investors and obtain
                      models Successful ones can be requested during the job interview.
                      <br />
                      (you can access to my certificate from "More info" section)
                    </div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">WEB DESIGNER INTERFACES & USER EXPERIENCE AND TESTING</div>
                    <div className="card-item-desc">I have worked on many businesses & projects for people with skills and personal services, and for some stores and platforms to display their products and services and adequate definition of them, and with international experience certificates from "GOOGLE DEVELOPER & TEAM X PROGRAMMING."</div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">CYBERSECURITY & VULNERABILITIES DETECTION TO PROTECT WEBSITES</div>
                    <div className="card-item-desc">I have done many advanced competitions courses for penetration testing and providing a safe and supervised technology environment and certifications from "Google, Kennesaw State University</div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">REPAIR OF PHONES DEVICES/MOBILE,VIA Software And Hardware</div>
                    <div className="card-item-desc">After training in an intensive course for hardware repair in Asia and obtaining a certificate with a perfect grade in this field, I received the sales and maintenance center of the Xiaomi company, Homs branch, for more than a year.</div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">EXCELLENT KNOWLEDGE OF ENTREPRENEURSHIP AND ITS TRAINING</div>
                    <div className="card-item-desc">Holding an international certificate after courses and exams from King Khalid University in Saudi Arabia to teach it in many training courses for young people to enrich their knowledge and benefit more and encourage them to enrich their experiences and learn more to enter the market with these skills and advance society.</div>
                  </div>
                  <div className="card-item" data-year="2022">
                    <div className="card-item-title">TRAINER AND AMBASSADOR FOR " THE UNITED NATIONS "</div>
                    <div className="card-item-desc">
                      After many promotions to committees and voluntary charities for more than four years, I was nominated for higher positions until I reached and through a final nomination from one of the organization’s institutions through several criteria that I excel over others by appointing طme as their ambassador and coach with special recommendation certificates for good intentions and
                      behavior.
                    </div>
                  </div>
                  <div className="card-item" data-year="2022">
                    <div className="card-item-title">DEVELOPED IN PYTHON AND ARTIFICIAL INTELLIGENCE AND ITS USES</div>
                    <div className="card-item-desc">After several academic degrees, I entered the specialization of artificial intelligence to develop my software projects and create an intelligent environment that facilitates my work and learn more about it through specialized educational courses.</div>
                  </div>
                  <div className="card-item" data-year="2022">
                    <div className="card-item-title">ACQUISITION OF THE FIRST PROJECT AT THE LEVEL OF SYRIA</div>
                    <div className="card-item-desc">
                      After developing and refining my skills, I presented an entirely new scientific-program project at the general level, which targets the brain and its areas, developing and enhancing its processes of comprehension and understanding on the one hand and rapid and long-term memorization on the other hand, and the honor was awarded He has several private meetings in my accounts
                      and government accounts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="gallery">
            <div id="container">
              <ul>
                <li className="col-sm-6 item-mas">
                  <img className="img-responsive" src="images/gallery-img-1.jpg" alt="" />
                  <div className="over-gallery">
                    <div className="details">
                      <h4>Emergency department</h4>
                      <p>Nam liber tempor cum soluta</p>
                    </div>
                  </div>
                </li>

                <li className="col-sm-3 item-mas">
                  <img className="img-responsive" src="images/gallery-img-2.jpg" alt="" />
                  <div className="over-gallery">
                    <div className="details">
                      <h4>Emergency department</h4>
                      <p>Nam liber tempor cum soluta</p>
                    </div>
                  </div>
                </li>
                <li className="col-sm-3 item-mas">
                  <img className="img-responsive" src="images/gallery-img-3.jpg" alt="" />
                  <div className="over-gallery">
                    <div className="details">
                      <h4>Emergency department</h4>
                      <p>Nam liber tempor cum soluta</p>
                    </div>
                  </div>
                </li>

                <li className="col-sm-3 item-mas">
                  <img className="img-responsive" src="images/gallery-img-4.jpg" alt="" />
                  <div className="over-gallery">
                    <div className="details">
                      <h4>Emergency department</h4>
                      <p>Nam liber tempor cum soluta</p>
                    </div>
                  </div>
                </li>
                <li className="col-sm-3 item-mas">
                  <img className="img-responsive" src="images/gallery-img-5.jpg" alt="" />
                  <div className="over-gallery">
                    <div className="details">
                      <h4>Emergency department</h4>
                      <p>Nam liber tempor cum soluta</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <div id="services" className="services-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 padding-r-80">
                  <div className="tittle">
                    <h2>Our Sevices</h2>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet.</p>
                  <br />
                  <p>Claritas est etiam processus dynamicus, lectorum. Mirum est notare quam est notare quam littera eodem modo.</p>
                </div>

                <div className="col-lg-8">
                  <div className="services-slide">
                    <div className="slide sec-ser">{ser[serv]}</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "30px" }}>
                    <span
                      onClick={() => {
                        setServ((serv + 4) % 5);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {"<"}
                    </span>
                    <span
                      onClick={() => {
                        setServ((serv + 1) % 5);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {">"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="prople-says">
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
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AboutUs;
