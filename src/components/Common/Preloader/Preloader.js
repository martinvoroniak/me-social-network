import React from 'react';
import styles from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={styles.preloader}>
        <div className={styles.spinner}></div>
    </div>
}

export default Preloader;