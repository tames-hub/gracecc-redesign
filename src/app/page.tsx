import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Worship from "@/components/Worship";
import NewFamily from "@/components/NewFamily";
import News from "@/components/News";
import Education from "@/components/Education";
import Community from "@/components/Community";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <Worship />
        <NewFamily />
        <News />
        <Education />
        <Community />
        <Location />
      </main>
      <Footer />
    </>
  );
}
