import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <section
        className="award_section1"
        style={{ backgroundColor: "#232733" }}
        id="faq"
      >
        <div className="container">
          <div className="col-md-12">
            <h2 className="_seg____header__ mt_50">
              <span className="l_text2">Frequently</span> Asked Questions
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">

              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      What is Web Development?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                      Web Development broadly refers to the tasks associated
                      with developing functional websites and applications for
                      the Internet. The web development process includes web
                      design, web content development, client-side/server-side
                      scripting and network security configuration, among other
                      tasks.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      What is HTML?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    HTML, aka HyperText Markup Language, is the dominant
                      markup language for creating websites and anything that
                      can be viewed in a web browser.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      What are some basic technical skills of a Front-End
                    developer?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    <ul style={{ paddingLeft: "1rem" }}>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Frameworks (CSS and JavaScript frameworks)</li>
                        <li>Responsive Design</li>
                        <li>Version Control/Git</li>
                        <li>Testing/Debugging</li>
                        <li>Browser Developer Tools</li>
                        <li>Web Performance</li>
                        <li>SEO (Search Engine Optimization)</li>
                        {/* <li>CSS Preprocessing</li> */}
                        <li>Command Line</li>
                        <li>CMS (Content Management System)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      What is HTTP?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    HTTP, aka HyperText Transfer Protocol, is the underlying
                      protocol used by the World Wide Web and this protocol
                      defines how messages are formatted and transmitted, and
                      what actions Web servers and browsers should take in
                      response to various commands.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      What is CORS?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    CORS, aka Cross-Origin Resource Sharing, is a mechanism
                      that enables many resources (e.g. images, stylesheets,
                      scripts, fonts) on a web page to be requested from another
                      domain outside the domain from which the resource
                      originated.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      What is Web Development?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    Web Development broadly refers to the tasks associated
                      with developing functional websites and applications for
                      the Internet. The web development process includes web
                      design, web content development, client-side/server-side
                      scripting and network security configuration, among other
                      tasks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="assets/images/faq.png" className="img_fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
