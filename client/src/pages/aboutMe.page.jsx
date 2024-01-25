import AboutMeComponent from "../components/aboutMe.component";
import Skills from "../components/skills.component";
import MyFunFacts from "../components/myFunFacts.component";
const AboutMe = () => {
    return (
        <div className="mt-20">
        <h1 className="text-white text-4xl ">About Me Page</h1>
        
        <div className="mt-20"><AboutMeComponent/></div>
        <div className="mt-20"><Skills/></div>
        <div className="mt-20"><MyFunFacts/></div>
        </div>
    );
    }
export default AboutMe;