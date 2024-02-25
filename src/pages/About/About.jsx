import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub We're passionate bibliophiles dedicated to transforming your reading experience. At BookHub, we believe that books have the power to inspire, educate, and transport us to new worlds. Our mission is to make discovering your next favorite read a delightful and seamless journey.
<br/>
With an ever-growing collection of curated booklists meticulously crafted by our team of literary enthusiasts, we aim to cater to every taste, interest, and mood. Whether you're a seasoned bookworm searching for your next literary obsession or a newcomer eager to dive into the world of reading, we're here to guide you every step of the way.
<br/>
From riveting thrillers to heartwarming romances, thought-provoking classics to trending bestsellers, our diverse selection ensures there's something for everyone. And with personalized recommendations tailored to your preferences, discovering new titles has never been easier.
<br/>
Join our vibrant community of readers, share your favorite books, engage in lively discussions, and embark on unforgettable reading adventures. At BookHub, we're more than just a booklist app – we're your trusted companion on your literary journey.
<br/>
Happy reading!
<br/>
The BookHub Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
