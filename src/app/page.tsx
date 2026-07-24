import Header from "@/components/sections/Header/page";
import MainContent from "@/components/sections/Main/page";
import Footer  from "@/components/sections/Footer/page";


export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
      <MainContent />
      </main>
      <Footer />
    </div>
  );
}
