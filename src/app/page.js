import Menu from "@/src/components/Home/Menu";
import Header from "../components/Home/Header";
import Advantages from "../components/Home/Advantages";
import Prices from "../components/Home/Prices";
import FAQ from "../components/Home/FAQ";
import Contact from "../components/Home/Contact";

const page = () => {
  return (
    <>
      <Menu />

      <Header />

      <Advantages />

      <Prices />

      <FAQ />

      <Contact />
    </>
  );
};

export default page;
