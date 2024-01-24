import HomeCmponent from "../components/home.component";

const Home = () => {
  return (
    <>
      {/* main components */}
      <div className="home" id="home">
        <HomeCmponent />
      </div>

      <div className="projects" id="projects">
      <h1 className="text-white text-4xl m-auto">Projects</h1>
      </div>

      <div className="skills" id="skills"></div>

      <div className="about-me" id="about-me"></div>

      <div className="contact-me" id="contact-me"></div>
    </>
  );
};

export default Home;
