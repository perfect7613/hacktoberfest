import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AboutUs/>
      <Card/>
    </div>
  )
}
