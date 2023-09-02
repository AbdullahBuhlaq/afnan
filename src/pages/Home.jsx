import { useEffect, useState } from "react";

function Home(props) {
  useEffect(() => {
    props.setCurrentTab("home");
  }, []);

  const pres = [
    <a aria-controls="home" role="tab" data-toggle="tab">
      OverView
    </a>,
    <a aria-controls="profile" role="tab" data-toggle="tab">
      Cardiology{" "}
    </a>,
    <a aria-controls="messages" role="tab" data-toggle="tab">
      For disabled{" "}
    </a>,
    <a aria-controls="settings" role="tab" data-toggle="tab">
      Ophthalmology{" "}
    </a>,
    <a aria-controls="settings" role="tab" data-toggle="tab">
      {" "}
      Emergency{" "}
    </a>,
    <a aria-controls="settings" role="tab" data-toggle="tab">
      {" "}
      X-ray
    </a>,
  ];
  const pics = [
    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="depart-bg-over"></div>
      </div>
      <div className="dep-sec-txt text-left">
        <div className="tittle">
          <h2>Our Departments</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise to make a diagnosis and implement cutting-edge therapies.</p>
        <br />
        <p>Claritas est etiam processus dynamicus, qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,
    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="cardio-bg"></div>
      </div>
      <div className="dep-sec-txt">
        <div className="tittle">
          <h2>Cardiology</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise</p>
        <br />
        <p>Claritas est etiam processus dynamicus,to make a diagnosis and implement cutting-edge therapies. qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,

    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="for-dis-bg"></div>
      </div>
      <div className="dep-sec-txt">
        <div className="tittle">
          <h2>For Disabled</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise to make a diagnosis and implement cutting-edge therapies.</p>
        <br />
        <p>Claritas est etiam processus dynamicus, qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,

    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="opth-bg"></div>
      </div>
      <div className="dep-sec-txt">
        <div className="tittle">
          <h2>Ophthalmology</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise to make a diagnosis and implement cutting-edge therapies.</p>
        <br />
        <p>Claritas est etiam processus dynamicus, qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,

    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="emer-bg"></div>
      </div>
      <div className="dep-sec-txt">
        <div className="tittle">
          <h2>Emergency</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise</p>
        <br />
        <p>Claritas est etiam processus dynamicus,to make a diagnosis and implement cutting-edge therapies. qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,

    <>
      <div className="dep-sec-img img-bg-dep">
        <div className="x-ray-bg"></div>
      </div>

      <div className="dep-sec-txt">
        <div className="tittle">
          <h2>X Ray</h2>
        </div>
        <p>We are a team of young professionals passionate in our work. We work in a friendly and efficient using the latest technologies and sharing our expertise</p>
        <br />
        <p>Claritas est etiam processus dynamicus,to make a diagnosis and implement cutting-edge therapies. qui sequitur mut ationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, antep osuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        <ul className="fact row">
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Qualified Staff of Doctors
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Feel like you are at Home Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>24x7 Emergency Services
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Save your Money and Time with us
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medicine Research
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Dental Care
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Medical Consulting
            </p>
          </li>
          <li className="col-sm-6">
            <p>
              <i className="ion-erlenmeyer-flask"></i>Blood Bank
            </p>
          </li>
        </ul>
        <a href="#." className="btn">
          {" "}
          View Our Services
        </a>
        <a href="#." className="btn btn-1 margin-l-20">
          {" "}
          CONTACT US
        </a>{" "}
      </div>
    </>,
  ];
  const [cur, setCur] = useState(0);
  try {
    return (
      <>
        <div className="dash">
          <div>
            <div id="banner" className="full-screen">
              <div className="main-bnr">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 no-padding">
                      <div className="main-bnr-text">
                        <h5>Welcome to digitized medical records</h5>
                        <h1>BLOCKCHAIN IN HEALTHCARE SYSTEM</h1>
                        <p>Student Afnan’s graduation project, to record statistics and medical records on patients and encrypt them, shorten a lot of time and effort in medical diagnoses, and know the health archive of patients for doctors.</p>
                        <a href="#." className="btn btn-1">
                          Make an appoitment
                        </a>{" "}
                      </div>
                    </div>

                    <div className="col-md-6 no-padding main-bnr-bg" data-stellar-background-ratio="0.5">
                      {" "}
                    </div>
                  </div>
                </div>
                <img src="images/banner.jpg" alt="" />
                <div className="go-down scroll">
                  {" "}
                  <a href="#why-choose">
                    <i className="ion-ios-arrow-down"></i>
                  </a>{" "}
                </div>
              </div>
            </div>

            <div id="why-choose">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="tittle">
                      <h2>What is the idea of ​​the project?</h2>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <ul className="row">
                      <li className="col-sm-4">
                        <h6>Shorten the time for the doctor's</h6>
                        <p>Because doctors' time is always tight and busy, the idea of ​​the project will be limited to reviewing patients' data directly in advance.</p>
                      </li>

                      <li className="col-sm-4">
                        <h6>Quick medical summaries</h6>
                        <p>Through each patient's medical record, the doctor will be able to briefly review all medical details</p>
                      </li>

                      <li className="col-sm-4">
                        <h6>inclusivity a</h6>
                        <p>In order for the patient not to forget any note that his doctor mentioned to him in previous times and any treatment he had prescribed to him, everything will be easy to access to remember.</p>
                      </li>
                    </ul>
                    <ul className="row">
                      <li className="col-sm-4">
                        <h6>Higher accuracy in diagnosis</h6>
                        <p>The doctor can see the completely correct and actual diagnoses made by the doctors who preceded him by examining the patient himself, and thus relying on their words and the previous diseases that they diagnosed without losing because the patient conveyed a wrong diagnosis on the Doctor's tongue </p>
                      </li>
                      <li className="col-sm-4">
                        <h6>Data encryption and diagnostics</h6>
                        <p>By means of data encryption processes, no party, whatever it is, will be allowed to view and see the patient's information without his consent</p>
                      </li>
                      <li className="col-sm-4">
                        <h6>Medicines without a medical license</h6>
                        <p>No person will be able to obtain medicines based on his self-diagnosis or the advice of an incompetent person, and thus reduce cases of drug poisoning and others, because he will get it exclusively through his medical record.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {" "}
                <img className="img-responsive" src="images/why-choose-img.jpg" alt="" />{" "}
              </div>
            </div>

            <section id="services">
              <div className="container-fluid">
                <ul className="row">
                  <li className="col-md-3">
                    {" "}
                    <i className="fa fa-heartbeat"></i>
                    <h5>More accurate and broader interest</h5>
                    <p>Through access to medical records and diagnostic information, the error rate has become less because the data is displayed correctly</p>
                  </li>
                  <li className="col-md-3">
                    {" "}
                    <i className="fa fa-stethoscope"></i>
                    <h5>More economical procedures</h5>
                    <p>No need to take all the diagnoses and CT scans or re-scan them every time you go to a doctor anymore</p>
                  </li>
                  <li className="col-md-3">
                    {" "}
                    <i className="fa fa-user-md"></i>
                    <h5>Maintain privacy</h5>
                    <p>No more invasion of privacy from people and doctors due to files being lost, stolen or accessed without permission.</p>
                  </li>
                  <li className="col-md-3">
                    {" "}
                    <i className="fa fa-ambulance"></i>
                    <h5>Emergency Services</h5>
                    <p>Better ability to aid and treat the patient thanks to the ability to access his medical record through the approval of his relatives after contacting them and identifying his identity.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="department">
              <div role="tabpanel">
                <div className="dep-sec-nav ab-cnter">
                  <ul className="nav nav-tabs" role="tablist">
                    {pres.map((pr, prIndex) => {
                      return (
                        <li
                          key={prIndex}
                          role="presentation"
                          className={cur == prIndex ? "active" : ""}
                          onClick={() => {
                            setCur(prIndex);
                          }}
                        >
                          {pr}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="tab-content">
                  {pics.map((pic, picIndex) => {
                    return (
                      <div div role="tabpanel" className={"tab-pane fade" + (picIndex == cur ? " in active" : "")}>
                        {pic}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="contact-info">
              <div className="container">
                <ul className="row">
                  <li className="col-md-3">
                    {" "}
                    <i className="ion-ios-location-outline"></i>
                    <h5>Address</h5>
                    <p>1800 Abbot Kinney Blvd. Unit D & E Venice, CA 90291</p>
                  </li>

                  <li className="col-md-3">
                    {" "}
                    <i className="ion-iphone"></i>
                    <h5>Hotline</h5>
                    <p>+00-0122-123-0089</p>
                  </li>

                  <li className="col-md-3">
                    {" "}
                    <i className="ion-ios-email-outline"></i>
                    <h5>Email contact</h5>
                    <p>medikal@gmail.com</p>
                    <p> contact@medikalclinic.com</p>
                  </li>

                  <li className="col-md-3">
                    {" "}
                    <i className="ion-earth"></i>
                    <h5>Website</h5>
                    <p>www.medikalclinic.com </p>
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

export default Home;
