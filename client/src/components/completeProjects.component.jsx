import "../css/completeProject.component.css";
const CompleteProject = ({
  project_img,
  project_tech,
  project_title,
  project_description,
  live_link,
  project_link,
}) => {
  return (
    <div className="completeProject_container">
      <div className="project_image">
        <img src={project_img} alt="Project Image" />
      </div>
      <div className="project_tech">{project_tech}</div>
      <div className="project_info">
        <div className="project_title">{project_title}</div>
        <div className="project_description">{project_description} </div>
        <div className="project_link">
          <div className="project_link_button">
            <button className="project_link_button_text" href={live_link}>
              Live
            </button>
          </div>
          <div className="project_link_button">
            <button className="project_link_button_text" href={project_link}>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompleteProject;
