// import React , {useState}from 'react'
// import styles from './main.module.css'


// function Typingtext() {

// const textArray = ['Web Developer','Programmer','UI/UX Designer','Data Analyst']
// let typeSpeed = 200;
// let eraseSpeed = 300;
// let newTextSpeed = 1000;

// let textArrayIndex = 0;
// const [charIndex, setCharIndex] = useState(0);
// const [text, setText] = useState('')

// function type(){
//   if(charIndex < textArray[textArrayIndex].length)
//     {setText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
//       setCharIndex(prev => prev + 1)
//       setTimeout(type,typeSpeed)
//     }
// }




//   return (
//     <div>
//         <p className={styles.maintext} onClick={()=>type()}>I am <span className={styles.typetext}>{text}</span><span className={styles.cursor}>|</span></p>
//     </div>
//   )
// }

// export default Typingtext


import React, { useState, useEffect } from 'react';
import styles from './main.module.css';

function TypingText() {

  const typeSpeed = 100;
  const eraseSpeed = 100;
  const newTextSpeed = 1000;

  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const textArray = ['Web Developer', 'Programmer', 'UI/UX Designer', 'Data Analyst'];
    let typingTimeout;

    if (isTyping) {
      if (charIndex < textArray[textArrayIndex].length) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        setTimeout(() => setIsTyping(false), newTextSpeed);
      }
    } else {
      if (charIndex > 0) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else {
        setIsTyping(true);
        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isTyping,  textArrayIndex]);

  return (
    <div>
      <p className={styles.maintext}>
        I am <br/><span className={styles.typetext}>{text}</span>
        <span className={styles.cursor}>|</span>
      </p>
    </div>
  );
}

export default TypingText;
