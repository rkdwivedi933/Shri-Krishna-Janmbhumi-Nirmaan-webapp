import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import Privileges from "../components/home/Privileges";
import TempleCarousel from "../components/home/TempleCarousel";
import Testimonial from "../components/home/Testimonial";
import BackgroundWrapper from "../components/layout/BackgroundWrapper";
import OtherDonations from "../components/home/OtherDonations";
import TestimonialsSection from "../components/home/TestimonialsSection";
import DonorTestimonials from "../components/home/DonorTestimonials";
import BankDetailsCard from "../components/home/BankDetailsCard";
import DonationShowcase from "../components/home/DonationShowcase";
import TempleDonation from "../components/home/TempleDonation";
import ContactForm from "../components/home/ContactForm";

function Home() {
  return (
    <div>
      <Navbar />

      <BackgroundWrapper>
        <TempleCarousel />
        <DonationShowcase />

        <Privileges />
        <DonorTestimonials />
        <OtherDonations />
        <TestimonialsSection />

        <BankDetailsCard />
        <Testimonial />
        <ContactForm/>
        <TempleDonation />
      </BackgroundWrapper>

      <Footer />
    </div>
  );
}

export default Home;
