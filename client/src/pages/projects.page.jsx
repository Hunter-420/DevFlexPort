import CompleteProject from "../components/completeProjects.component";
import SmallProjects from "../components/smallProjects.component";
import "../css/projects.page.css";

const Projects = () => {
  return (
    <div className="mt-20">
      <div className="flex">
        <span className="project_slash">/</span>
        <h1 className="project_text">Projects</h1>
      </div>
      <h1 className="project_subtitle">List of my projects</h1>

      {/* complete project section */}
      <div className="mt-20 pt-20">
        <div className="flex">
          <span className="project_slash">#</span>
          <h1 className="project_type">complete-projects</h1>
        </div>
        <div className="mt-20 flex flex-wrap gap-5">
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
          <CompleteProject />
        </div>
      </div>

      {/* small project section */}
      <div className="mt-20">
        <div className="flex">
          <span className="project_slash">#</span>
          <h1 className="project_type">small-projects</h1>
        </div>
        <div className="mt-20">
          <SmallProjects />
        </div>
      </div>
    </div>
  );
};
export default Projects;
