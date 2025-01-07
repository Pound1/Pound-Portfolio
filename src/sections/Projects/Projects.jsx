import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import chess from '../../assets/Uni Project-Chess Render 1.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chess}
          link="https://google.com"
          h3="Chess Board"
          p="University Assignment"
        />
      </div>
    </section>
  );
}

export default Projects;
