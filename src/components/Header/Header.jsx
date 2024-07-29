import React from "react";
import logo from "../../images/logo.png";
import cn from "classnames";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cn(styles["header"])}>
      <a className={cn(styles["header-logo"])} href="/">
        <img src={logo} alt="kropp logo" loading="lazy" />
      </a>
      <nav className={cn(styles["header-menu"])}>
        <ul className={cn(styles["header-menu-list"])}>
          <li className={cn(styles["header-menu-item"])}>
            <a
              className={cn(styles["header-menu-link"], styles["is-current"])}
              href="/"
            >
              Home
            </a>
          </li>
          <li className={cn(styles["header-menu-item"])}>
            <a className={cn(styles["header-menu-link"])} href="/">
              Pages
            </a>
          </li>
          <li className={cn(styles["header-menu-item"])}>
            <a className={cn(styles["header-menu-link"])} href="/">
              Portfolio
            </a>
          </li>
          <li className={cn(styles["header-menu-item"])}>
            <a className={cn(styles["header-menu-link"])} href="/">
              Blog
            </a>
          </li>
          <li className={cn(styles["header-menu-item"])}>
            <a className={cn(styles["header-menu-link"])} href="/">
              Shop
            </a>
          </li>
        </ul>
      </nav>
      <div className={cn(styles["header-actions"])}>
        <button className={cn(styles["button"], styles["header-book-button"])}>
          Book now
        </button>
        <button
          className={cn(styles["header-burger-button"])}
          type="button"
          title="Open menu"
        >
          <span className={cn("visually-hidden")}>Open Menu</span>
          <span className={cn(styles["header-burger-button-line"])}></span>
          <span className={cn(styles["header-burger-button-line"])}></span>
          <span className={cn(styles["header-burger-button-line"])}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
