
import About from "@/Components/About/About";
import Experiences from "@/Components/Experiences/Experiences";
import Skills from "@/Components/Skills/Skills";
import Projek from "@/Components/Projek/Projek";
import Contact from "@/Components/Contact/Contact";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <About/>
   <Experiences/>
   <Skills/>
   <Projek/>
   <Contact/>
   </>
  )
}
