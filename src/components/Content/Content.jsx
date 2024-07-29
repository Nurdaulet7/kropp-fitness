import React from "react";
import cn from "classnames";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <main className={cn(styles["content"])}>
      <h1 className="visually-hidden">Kropp Fitness Club</h1>
      <section className={cn(styles["banner"])}>
        <h2 className="visually-hidden">Upcoming events</h2>
        <div className={cn(styles["banner-body"])}>
          <div className={cn(styles["banner-info"])}>
            New event
            <br /> coming up / <time dateTime="06-07">june 7</time> -{" "}
            <time dateTime="06-13">13</time>
          </div>
          <h3 className={cn(styles["banner-title"])}>Crossfit</h3>
        </div>
        <div className={cn(styles["banner-pagnation"])}></div>
      </section>
    </main>
  );
};

export default Content;
