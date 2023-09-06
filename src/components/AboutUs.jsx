import React from 'react';
import "./about.css"
import "./queries.css"
import JB from "../assests/JanBasha.png"
import R from "../assests/Raghavendra-fotor-2023090619483.png"
import N from "../assests/Nitin-fotor-20230906194735.png"
import Ra from "../assests/Ramdas-fotor-20230906194826.png"
import T from "../assests/teja-fotor-20230906194850.png"
import Logo from "../assests/newlogo.png"
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div><div className="bg-blue-500 py-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex px-2 items-center">
        <img src={Logo} alt="Divulge Logo" className="h-8  rounded-full w-8 mr-2" />
        <h1 className="text-white text-lg sm:text-3xl font-semibold">DIVULGE</h1>
      </div>
      <ul className="flex gap-2 sm:text-xl sm:space-x-4 over">
      <li>
          <Link
            to="/"
            className=" bg-transparent border border-blue-500 text-black hover:bg-blue-500 hover:text-white py-2  rounded"> 
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className=" bg-transparent border border-blue-500 text-black hover:bg-blue-500 hover:text-white py-2rounded"
          >
            SignUp/SignIn
          </Link>
        </li>
      
      </ul>
    </nav>
 </div>
    
      <section id="profile">
      <div className="section__pic-container">
        <img src={JB} alt="" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">SHAIK JOHNBASHA</h1>
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
        
        
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          
        
      </div>
    </section>

   {/* Raghavendra */}
    {/* Nitin */}
    <section id="profile">
      <div className="section__pic-container">
        <img src={N} alt="" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nitin</h1>
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
        
        
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          
        
      </div>
    </section>

   {/* Raghavendra */}
    {/* Ramdas */}
    <section id="profile">
      <div className="section__pic-container">
        <img src={Ra} alt="" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ramdas</h1>
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
        
        
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          
        
      </div>
    </section>

   {/* Raghavendra */}
    <section id="profile">
      <div className="section__pic-container">
        <img src={R} alt="" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">SHAIK JOHNBASHA</h1>
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
        
        
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          
        
      </div>
    </section>

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
        
        
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          
        
      </div>
    </section>

    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 DIVULGE. All Rights Reserved.</p>
    </footer></div>
  
        
      
  );
}

export default Portfolio;

