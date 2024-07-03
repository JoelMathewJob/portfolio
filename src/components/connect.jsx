import React from 'react'
import styles from './main.module.css'

function Connect() {
    
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "8d35f6e1-7e3c-43ce-bce5-8cca2ea7d072");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      

    return (
        <div id='connect' className={styles.connect_container} >
            <p className={styles.title}>Connect</p>
            <form action='#' onSubmit={onSubmit} >
                <input type='type'  name='name' placeholder='Name' required />
                <input type='email' name='email' placeholder='Email' required />
                <textarea name='message' placeholder='Message' required />

                <button type='submit' >Submit</button>
            </form>
            <span>{result}</span>
        </div>
    )
}

export default Connect