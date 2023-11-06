import Image from "next/image";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}
