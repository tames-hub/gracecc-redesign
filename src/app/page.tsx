import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
