import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="award_section1" id="contact">
        <div className="container">
          <div className="col-md-12">
            <h2 className="_seg____header__ mt_50">Contact Us</h2>
          </div>
          <div className="row">
          <div className="col-md-6">
            <center>
              <img
                src="assets/images/contact.png"
                className="img_fluid"
                alt=""
                width="400px"
              />
            </center>
          </div>
          <div className="col-md-6">
            <h2>Stacked form</h2>
            <form action="#">
              <div className="mb-3 mt-3">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  name="name"
                />
              </div>
              <br />
              <br />
              <div className="mb-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <br />
              <br />
              <div className="mb-3">
                <label htmlFor="pwd">Messege</label>
                <textarea
                  id="msg"
                  rows={4}
                  className="form-control"
                  name="message"
                  placeholder="You message..."
                  defaultValue={""}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primaryMain">
                Submit
              </button>
            </form>
          </div>
          </div>
          <br />
        </div>
        <br />
        <br />
      </section>
    </div>
  );
};

export default Contact;
