import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Map from "@/islands/Map";

const Home = () => {
  const mapShow = true;
  return (
    <>
      <Header />
      <Hero />
      <div className="flex justify-center items-start p-2 h-30 font-inter">
        {mapShow ? <Map /> : <p className="text-red-800">No showing map</p>}
      </div>
      <Footer />
    </>
  );
};

export default Home;
