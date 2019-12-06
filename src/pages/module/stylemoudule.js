import React, { Component } from 'react';
import styles from './stylemodule.module.scss';

class Stylemodule extends Component {
    render() { 
        return (
            <div className={styles.Content}>
                <h1>This is page module</h1>
                <button className={styles.button}>Submit</button>
            </div>
        );
    }
}
 
export default Stylemodule;