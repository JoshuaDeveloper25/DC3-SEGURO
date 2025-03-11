import Menu from "@/src/components/Home/Menu";
import Header from "../components/Home/Header";
import Advantages from "../components/Home/Advantages";
import Prices from "../components/Home/Prices";
import Contact from "../components/Home/Contact";

const page = () => {
  return (
    <>
      <Menu />

      <Header />

      <Advantages />

      <Prices />

      <Contact />
    </>
  );
};

export default page;
