import React from "react";
import styles from "./Widgets.module.scss";

interface PostProps {
  profileImage: string;
  username: string;
  image: string;
  tag: string;
  config: any;
}
export const Post = ({profileImage, username, image, tag, config}: PostProps) => {
  return(
    <div className={styles.post}>
      <div className={styles.post_header}>
        <img src={profileImage} alt="" />
        <p>{username}</p>
      </div>
      <div className={styles.post_picture}>
        <img src={image} alt="" />
      </div>
      <div className={styles.post_footer}>
        <div className={styles.post_actions}>
          <i>{config.actions.like}</i>
          <i>{config.actions.comment}</i>
          <i>{config.actions.share}</i>
        </div>
        <div className={styles.post_tag}>
          <p>{username} <span>{tag}</span></p>
        </div>
      </div>
    </div>
  )
}