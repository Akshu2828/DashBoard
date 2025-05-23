import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Exprerience from "../components/Exprerience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Profile />
        <Skills />
        <Education />
        <Projects />
        <Exprerience />
      </main>
    </div>
  );
}
