import styles from './HeroStyles.module.css';
import heroImage from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

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
          <a href="twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="github.com" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for something that goes over two lines.
        </p>
        <a href="some page" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
