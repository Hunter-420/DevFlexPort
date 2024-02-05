import HomeCmponent from "../components/home.component";
import CompleteProject from "../components/completeProjects.component";
import Skills from "../components/skills.component";
import AboutMeComponent from "../components/aboutMe.component";
import ContactMe from "../components/contacts.component";

const Home = () => {
  return (
    <>
      {/* main components */}
      <div className="home" id="home">
        <HomeCmponent />
      </div>

      <div className="projects mt-20" id="projects">
      {/* <CompleteProject/> */}
      </div>

      <div className="skills mt-20" id="skills">
        {/* <Skills /> */}
      </div>

      <div className="about-me mt-20" id="about-me">
        {/* <AboutMeComponent /> */}
      </div>

      <div className="contact-me mt-20" id="contact-me">
        {/* <ContactMe /> */}
      </div>
    </>
  );
};

export default Home;
