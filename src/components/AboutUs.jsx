import React from 'react';
import "./about.css"
import "./queries.css"
import JB from "../assests/JanBasha.png"
import R from "../assests/Raghavendra-fotor-2023090619483.png"
import N from "../assests/Nitin-fotor-20230906194735.png"
import Ra from "../assests/Ramdas-fotor-20230906194826.png"
import T from "../assests/teja-fotor-20230906194850.png"

import Navbar from './Navbar';

function Portfolio() {
  return (
    <div>
     
    <Navbar/>
    <br/>
        
          <section id="profile">
          <div className="section__pic-container">
            <img src={N} alt="" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">NITIN SIGILIPELLI</h1>
            <p className="section__text__p2">Android App Developer</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                
              >
                LinkedIn
              </button>
              <button className="btn btn-color-1">
                GitHub
              </button>
            </div>
            
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
                <p className="Para">
                  
                I'm an Android app developer, well-versed in the dynamic world of Android Studio and proficient in the art of Java programming. In my creative journey, I sculpted an app that not only illuminates but also transforms the user experience, pushing the boundaries of what's possible in the realm of mobile technology.
                <br/>DIVULGE - College Communication App
                </p> 
            
          </div>
        </section>
        <br/>
        <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      /><br/>

      {/* Raghavendra */}
        {/* Nitin */}
        <section id="profile">
          <div className="section__pic-container">
            <img src={R} alt="" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">VATTIKUTI RAGHAVENDRA</h1>
            <p className="section__text__p2">Full Stack Web Developer</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                
              >
                LinkedIn
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                GitHub
              </button>
            </div>
            
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            
            
                <p className="Para">
                I'm a full-stack web developer, navigating the intricate landscapes of web development with ease. I've harnessed a versatile skill set that encompasses both front-end and back-end technologies, weaving them together seamlessly. In my coding odyssey, I've crafted web applications that not only captivate but also revolutionize the online experience, pushing the boundaries of what's achievable in the digital realm.
                </p>
              
            
          </div>
        </section>
        <br/>
        <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      /><br/>

      
        <section id="profile">
          <div className="section__pic-container">
            <img src={JB} alt="" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">SHAIK JOHN BASHA</h1>
            <p className="section__text__p2">Frontend Developer</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                
              >
                LinkedIn
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                GitHub
              </button>
            </div>
            
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            
            
                <p className="Para">
                I'm a front-end developer, skilled in crafting captivating and user-centric web interfaces. With a keen eye for design and expertise in HTML, CSS, and JavaScript, I've sculpted digital experiences that not only engage but also redefine user expectations. In my creative journey, I've built websites that blend artistry and functionality, pushing the boundaries of what's possible in the realm of user interface design.I'm created beautiful responsive web pages.  
                </p>
              
            
          </div>
        </section>
        <br/>
        <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      /><br/>

      {/* Raghavendra */}
        <section id="profile">
          <div className="section__pic-container">
            <img src={Ra} alt="" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">RAMDASU</h1>
            <p className="section__text__p2">Frontend Developer </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                
              >
                LinkedIn
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                GitHub
              </button>
            </div>
            
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            
            
                <p className="Para">
                I'm a front-end developer, skilled in crafting captivating and user-centric web interfaces. With a keen eye for design and expertise in HTML, CSS, and JavaScript, I've sculpted digital experiences that not only engage but also redefine user expectations. In my creative journey, I've built websites that blend artistry and functionality, pushing the boundaries of what's possible in the realm of user interface design.
                </p>
              
            
          </div>
        </section>
        <br/>
        <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      /><br/>

      {/* Teja */}
        <section id="profile">
          <div className="section__pic-container">
            <img src={T} alt="" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">SRI TEJA</h1>
            <p className="section__text__p2">Frontend Developer</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                
              >
                LinkedIn
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                GitHub
              </button>
            </div>
            
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            
            
                <p className="Para">
                I'm a front-end developer, skilled in crafting captivating and user-centric web interfaces. With a keen eye for design and expertise in HTML, CSS, and JavaScript, I've sculpted digital experiences that not only engage but also redefine user expectations. In my creative journey, I've built websites that blend artistry and functionality, pushing the boundaries of what's possible in the realm of user interface design.
                </p>
              
            
          </div>
        </section>
        <br/>
        <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      /><br/>

        
        <footer>
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              
              <p><a href="mailto:examplemail@gmail.com">aiverse@vishnu.edu.in</a></p>
            </div>
            <div className="contact-info-container">
              
              <p><a href="https://www.linkedin.com">LinkedIn</a></p>
            </div>
          </div>
        </section>
          <p>Copyright &#169; 2023 DIVULGE. All Rights Reserved.</p>
        </footer>
    </div>
  
        
      
  );
}

export default Portfolio;

