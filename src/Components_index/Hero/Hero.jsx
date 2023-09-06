import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {

  const [isLoading, setIsLoading] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
  }, []);
  
  var canvasButton= document.getElementsByClassName("tsparticles")
  console.log("canvasButton",canvasButton);
  // canvasButton.removeAttribute('style')
  // document.querySelector('.tsparticles').style = '';
  return (
    <div>
        {/* <Particles
            id="tsparticlesss"
            canvasClassName="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
              position: 'relative !important',
            }}
            options={{
              position: 'relative !important',
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                  position: 'relative !important',
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        // height: 100
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: false,
            }}
        >
      </Particles> */}
      
      <div className="main_header__">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="_in_content_" style={{ marginTop: 20 }}>
                <div className="_l_div_m">
                  <h2 className="l_text">
                    Invest Your Money With{" "}
                    <span className="l_text1">Higher Return</span>
                  </h2>
                  <p className="para text-white">
                    Anyone can invest money to different currency to increase
                    their earnings by the help of reldexlive through online.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <center>
                <img
                  className="r_img1 img_fluid"
                  src="assets/images/banner.png"
                />
              </center>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: -1,
            height: "100%",
          }}
          id="particles-js"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
