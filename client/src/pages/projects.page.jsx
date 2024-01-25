import CompleteProject from "../components/completeProjects.component";
import SmallProjects from "../components/smallProjects.component";
const Projects = () => {
  return (
    <div className="mt-20">
      <div className="mt-20">
        <CompleteProject />
      </div>
      <div className="mt-20">
        <SmallProjects />
      </div>
    </div>
  );
};
export default Projects;
