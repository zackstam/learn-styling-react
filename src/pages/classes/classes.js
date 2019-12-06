import React, { Component } from 'react';
import styles from './classes.module.scss';

class Classes extends Component {

    render() { 
        const newStyles = [];
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                newStyles.push(styles[key])
            }
        }
        return (
            <div className={newStyles.join(' ')}>Classes</div>
        );
    }
}
 
export default Classes;