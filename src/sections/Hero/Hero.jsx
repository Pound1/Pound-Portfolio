import styles from './HeroStyles.module.css';
import heroImage from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinnLight from '../../assets/linkedin-light.svg';
import linkedinnDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinnIcon = theme === 'light' ? linkedinnLight : linkedinnDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile Picture for Lachlan Pound"
        />
        <img
          className={styles.colourMode}
          src={themeIcon}
          alt="Colour mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lachlan <br></br> Pound
        </h1>
        <h2>Product Owner</h2>
        <span>
          <a href="https://x.com/lachy78503406" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Pound1" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lachlan-henricus-pound-103a78a0"
            target="_blank"
          >
            <img src={linkedinnIcon} alt="linkedinn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passion for coding, crypto, and 3D modeling: technology is a domain
          with limitless creativity.
        </p>
        <a href="some page" /*download <- enable when ready*/>
          <button className="hover">Resumé</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
