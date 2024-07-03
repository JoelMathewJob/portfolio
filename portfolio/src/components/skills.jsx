import React from 'react';
import styles from './main.module.css';

function Skills() {
  const frontlang = ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NextJS', 'Bootstrap', 'Tailwind', 'SvelteJS'];
  const backlang = ['NodeJS', 'ExpressJS', 'MySQL', 'XAMPP', 'MongoDB', 'CASE','Prisma'];
  const proglang = ['C', 'C++', 'C#', 'JAVA', 'Python', 'GO'];
  const ui = ['Figma', 'MaterialUI', 'Webflow', 'WordPress'];

  return (
    <div id='skills' className={styles.skills_maincontainer}>
      <p className={styles.title}>Skills</p>
      <div className={styles.skills_leftcontainer}>
        <div className={styles.skillscard}>
          <h5 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Frontend</h5>
          {frontlang.map((item, index) => (
            <span key={index} className={styles.skillspan} style={item[0] === 'R' || item[0] === 'B' ? { border: '2px solid #4a4add' } : item[0] === 'S' ? { border: '2px solid orange' } : {}}>{item}</span>
          ))}
        </div>
        <div className={styles.skillscard}>
          <h5 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Backend</h5>
          {backlang.map((item, index) => (
            <span key={index} className={styles.skillspan} style={item[1] === 'o' ? { border: '2px solid #05d005' } : {}}>{item}</span>
          ))}
        </div>
        <div className={styles.skillscard}>
          <h5 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>UI/UX Design</h5>
          {ui.map((item, index) => (
            <span key={index} className={styles.skillspan} style={item[1] === 'o' ? { border: '2px solid #05d005' } : (item[0] === 'F' ? { border: '2px solid #ec7e91' } : {})}>{item}</span>
          ))}
        </div>
        <div className={styles.skillscard}>
          <h5 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Programming</h5>
          {proglang.map((item, index) => (
            <span key={index} className={styles.skillspan} style={item[0] === 'J' ? { border: '2px solid orange' } : (item[0] === 'P' || item[1] === '#' ? { border: '2px solid rgb(75 171 228)' } : {})}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
