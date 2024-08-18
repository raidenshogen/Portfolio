import styles from './HeroStyles.module.css';
import heroimg from '../../assets/hero1.png';
import sun from '../../assets/sun-svgrepo-com.svg';
import moon from '../../assets/moon.png';
import facebookicom_l from '../../assets/facebook-svgrepo-com.svg';
import facebookicom_d from '../../assets/facebook_dark.svg';
import githubicom_l from '../../assets/github-svgrepo-com.svg';
import githubicom_d from '../../assets/github_dark.png';
import linkdinicom_l from '../../assets/linkedin-svgrepo-com.svg';
import linkdinicom_d from '../../assets/linkedin_dark.svg';
import cv from '../../assets/mon cv en 2024.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = theme === 'light' ? sun : moon;
  const facebookicom = theme === 'light'?  facebookicom_l : facebookicom_d;

  const githubicom = theme === 'light' ? githubicom_l : githubicom_d;
  const linkdinicom = theme === 'light' ? linkdinicom_l : linkdinicom_d;
  return (
  <section id='hero' className={styles.container}>
   <div className= {styles.colorModeContainer}>
   <img src= {heroimg} alt="my profil pic"  className={styles.hero} width='500px' />
   <img className={styles.colorMode} src={ThemeIcon} alt="color mode icon" onClick={ toggleTheme }  width='50px' />
   </div>
   <div className={styles.info}>
     <h1>Zineb
     <br /> 
     Nafil</h1>
     <h2>Futur UX/UI <br />
     Frontend Developer</h2>
     <span>
        <a href="https://facebook.com" target='_blank'>
        <img src={facebookicom} alt="facebook icon" width='40px'/></a>
        <a href="https://github.com" target='_blank'>
        <img src={githubicom} alt="Github icon" width='40px'/></a>
        <a href="https://fr.linkedin.com" target='_blank'>
        <img src={linkdinicom} alt="linkdin icon" width='40px'/></a>
     </span>
     <p className={styles.descreption}>
       with a passion for devloping a creative  visually  stunning for commercial websites. 
     </p>
     <a href={cv} download><button className='hover' >Resume</button></a>
   </div>
 </section>)
    
  
}

export default Hero;