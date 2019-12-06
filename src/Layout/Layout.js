import React from 'react';
import styles from './Layout.module.scss';
import { Link } from 'react-router-dom'

const Layout = (props) => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dinamis'>Dinamis</Link></li>
                    <li><Link to='/module'>Module</Link></li>
                    <li><Link to='/inline'>Inline</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                </ul>
            </div>
            <main className={styles.Content}>{props.children}</main>
        </>
    );
}
 
export default Layout;