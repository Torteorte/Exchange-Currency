import React from "react";
import styles from './ChangePage.module.scss'
import {NavLink} from "react-router-dom";

const ChangePage = (props) => {

    return (
        <div className={styles.changePage}>
            <NavLink to={props.destination}>{props.text}</NavLink>
        </div>
    )
}

export default ChangePage