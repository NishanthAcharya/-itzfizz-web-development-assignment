import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from './assets/heroImage.png'
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {

 useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".name h1", {
        opacity: 0,
        y: 40,
        duration: 1,
      });

      gsap.to(".visual-box", {
        x: 300,
        y: 400,
        scale: 1.7,
        rotation: 360,
        scrollTrigger: {
          trigger: ".visualize",
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });


      gsap.from(".satisfaction, .success, .perform", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".statistics",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

    return (
        <div className="hero">

            <div className="name">
                <h1>W E L C O M E I T Z F I Z Z</h1>
            </div>

            <div className="visualize">

                <h2 className="main-visual">
                    Creative Digital Experiences
                </h2>

                <div className="visual-box">
                    <img src={heroImage} alt="visual-box image" />
                </div>

            </div>

            <div className="statistics">

                <div className="satisfaction">
                    <h2>80%</h2>
                    <p>Satisfaction</p>
                </div>

                <div className="success">
                    <h2>90%</h2>
                    <p>Success</p>
                </div>

                <div className="perform">
                    <h2>95%</h2>
                    <p>Performance</p>
                </div>

            </div>

        </div>
    );
}

export default App;