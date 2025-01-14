import styles from './ProjectsStyles.module.css';
import Rand from '../../assets/generator_rand1.jpeg';
import Count from '../../assets/counter.jpeg';
import Convert from '../../assets/convert2.jpeg';
import Guess from '../../assets/guessLogo.png';
import ProjectCard from '../../common/ProjectCard';
import CoffeWebSite from '../../assets/Coffe.jpg';
import ecommerce from '../../assets/icon.png';
import TaskManager from '../../assets/TaskManager.jpg';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard 
       src={Rand} 
       link="https://github.com/raidenshogen/Random_Generator_Num.git" 
       h3="G-RanB"
       p='Random Number Generator'/>
       <ProjectCard 
       src={Count} 
       link="https://github.com/raidenshogen/counter_project.git" 
       h3="S-Counter"
       p='Counter'/>
          <ProjectCard 
       src={Convert} 
       link="https://github.com/raidenshogen/convert_coin.git" 
       h3="C-Coins"
       p='Convert_Coins'/>
          <ProjectCard 
       src={Guess} 
       link="https://github.com/raidenshogen/guess_game.git" 
       h3="Guessing"
       p='Guess game'/>
       <ProjectCard 
       src={CoffeWebSite} 
       link="https://github.com/raidenshogen/Coffe_project.git" 
       h3="Coffee"
       p='Coffee WebSite'/>
    <ProjectCard 
       src={ecommerce} 
       link="https://github.com/raidenshogen/django-project.git" 
       h3="E-commerce"
       p='E-commerce website'/>
       <ProjectCard 
       src={TaskManager} 
       link="https://github.com/raidenshogen/django_task.git" 
       h3="Task Manager"
       p='Task app'/>
      </div>

    </section>
  )
}

export default Projects