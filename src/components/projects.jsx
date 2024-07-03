import React from 'react';
import styles from './main.module.css';
import images from '../images/images';

function Projects() {
  return (
    <div id='projects' className={styles.projectcontainer}>
      <p className={styles.title}>Projects</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className={styles.projectcard}>
          <img src={images.uh} className="card-img-top" style={{ height:'150px'}} alt="..." />
          <div className={styles.projectcard_body}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>UtilityHub</h5>
            <p className="card-text">Service Provider Website, Connecting customers with local service providers and providing a promotional platform for businesses</p>
          </div>
        </div>

        <div className={styles.projectcard}>
          <img src={images.ssync} className="card-img-top" height='179px' alt="..." style={{ height:'150px'}}/>
          <div className={styles.projectcard_body}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>SecretSync</h5>
            <p className="card-text">Chat Application with Encryption using AES-Diffie-Hellman Algorithm prioritizing privacy and data security for online communication.</p>
          </div>
        </div>

        <a href='https://joelmathewjob.github.io/Clouder/' target='_blank' rel='noreferrer noopener' className={styles.projectcard} >
          <img src={images.clouder} className="card-img-top" style={{ position:'relative' ,height:'150px', width:'200px', left:'50px'}} alt="..." />
          <div className={styles.projectcard_body}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Clouder</h5>
            <p className="card-text">The Word Cloud Generator is a dynamic tool that transforms your text into a visually appealing word cloud.</p>
          </div>
        </a>

        <div className={styles.projectcard}>
          <img src={images.insta} className="card-img-top" style={{ height:'150px'}} alt="..." />
          <div className={styles.projectcard_body}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Instagram Clone</h5>
            <p className="card-text">Social Media Website, similar to Instagram. Users can connect with friends and share posts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
