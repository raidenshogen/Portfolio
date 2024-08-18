import styles from './SkillsStyles.module.css';
import check_l from '../../assets/d_checkmark.svg';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={check_l} skill='HTML'/>
        <SkillList src={check_l} skill='CSS'/>
        <SkillList src={check_l} skill='JAVASCRIPT'/>
        <SkillList src={check_l} skill='C++'/>
        <SkillList src={check_l} skill='CSHARP'/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={check_l} skill='PYTHON'/>
        <SkillList src={check_l} skill='DJANGO'/>
        <SkillList src={check_l} skill='UML'/>
        <SkillList src={check_l} skill='UNIX'/>
        <SkillList src={check_l} skill='BOOSTRAP'/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={check_l} skill='SQL' />
        <SkillList src={check_l} skill='PHP' />
        <SkillList src={check_l} skill='ORACLE' />
        <SkillList src={check_l} skill='TSQL' />
        <SkillList src={check_l} skill='SYNPHONIE' />
        
        
        </div>
      
    </section>
  )
}
export default Skills