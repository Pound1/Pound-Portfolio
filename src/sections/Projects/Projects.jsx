import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <a href="https://google.com">
          <img className="hover" src={viberr} alt="viberr image" />
          <h3>Viberr</h3>
          <p>Streaming Service</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
