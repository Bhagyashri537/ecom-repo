import React from "react";
import classes from './Footer.module.css'
const Footer = ()=> {
    return (<footer className={classes.footer}>
    <div className={classes["footer-title"]}>
        The Generics
    </div>
    <div  className={classes["footer-icons"]}>
        <ul>
            <li><a href="https://www.youtube.com">
                <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" />
            </a></li>
            <li><a href="https://spotify.com">
                <img src="./img/Spotify Logo.png" alt="" />
            </a></li>
            <li><a href="https://facebook.com">
                <img src="./img/Facebook Logo.png" alt="" />
            </a></li>
        </ul>
    </div>
</footer>)
}

export default Footer;