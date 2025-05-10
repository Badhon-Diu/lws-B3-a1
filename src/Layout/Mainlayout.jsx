import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header";
import Herosection from "../Components/Hero/Herosection";
import Pricing from "../Components/Pricing.jsx/Pricing";
import Service from "../Components/Service/Service";
import Testimonial from "../Components/Testimonial/Testimonial";
import Trail from "../Components/Trail/Trail";
export default function Mainlayout() {
  return (
    <>
      <Header></Header>
      <Herosection></Herosection>
      <Service></Service>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Faq></Faq>
      <Trail></Trail>
      <Footer></Footer>
    </>
  );
}
