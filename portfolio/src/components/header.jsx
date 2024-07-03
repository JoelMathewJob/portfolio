import React from 'react'
import TypingText from './typingtext'
import styles from './main.module.css'

function header() {
    return (
        <div id='header' className={styles.headercontainer} >
            <div className={styles.header_leftcontainer}>
                
                    <div >
                        <div className={styles.headerblob} style={{ padding: '20px', textAlign: 'right' }} />
                    </div>   
                
            </div>
            <div className={styles.header_rightcontainer}>
                <TypingText />
            </div>
        </div>
    )
}

export default header