import React from 'react';
import Footer from './Footer';
import MembershipPrivileges from './MembershipPrivileges';
import Navbar from "./Navbar";
import Opportunity from './Opportunity';
import Privileges from './Privileges';
import TempleCarousel from './TempleCarousel';
import Testimonial from './testimonial';
import AboutForm from './AboutForm';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='mx-12'>
        <TempleCarousel />
        <Opportunity />
        <Privileges />
        <MembershipPrivileges />
        <Testimonial />
      </div>
      <AboutForm/>
      <Footer />
    </div>
  );
}

export default Home;
