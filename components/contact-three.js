import React from "react";

const ContactThree = () => {
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">Contact with us</h4>
                <h1>Vous pouvez contactez ici:</h1>
              </div>
              <p>
                Adress of Hotel:xxxxxxxxxxxx
              </p>
              <div className="contact_location_box">
                <div className="contact_location_map">
                  <span ><i className="fa fa-map-marker" /></span>
                  <p>
                  Mahdia, 5100  <br />103 Rue Habib Bourguiba
                  </p>
                </div>
                <div className="contact_location_map contact_location_call">
                  <span className="icon-contact_call"><i className="fa fa-phone-square" /></span>
                  <p>
                    rihemhassounanjim90@gmail.com <br />
                  +216 52113008
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form action="#" method="post">
                <input
                  className="half_width input_m_right"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <input
                  className="half_width"
                  type="EMAIL"
                  name="email"
                  placeholder="Email address"
                />
                <textarea
                  name="content"
                  id="content"
                  cols="20"
                  rows="5"
                  placeholder="Write message"
                ></textarea>
                <button className="btn-blog" style={{ width: "40%" }} value="SUBMIT NOW">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
