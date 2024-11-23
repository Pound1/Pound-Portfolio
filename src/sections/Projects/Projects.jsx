import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="/pages/ProjectDetails"
          h3="3D"
          p="Streaming Service"
        />
        <ProjectCard
          src={hipsster}
          link="https://google.com"
          h3="Hipsster"
          p="Modern Optometrist"
        />
        <ProjectCard
          src={fitlift}
          link="https://google.com"
          h3="Fitlift"
          p="Fitness app"
        />
      </div>
    </section>
  );
}

export default Projects;
