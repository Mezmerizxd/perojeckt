import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import {Post} from "../../../styles/Widgets";
import styles from "./Start.module.scss";

const PlaceholderPosts = [
  {
    id: 1,
    user: "Apakura",
    profileImage: "https://www.neurosciencemarketing.com/wp-content/uploads/2016/08/mona-lisa.jpg",
    content: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    tag: "This is cool"
  },
  {
    id: 2,
    user: "adcplayer95",
    profileImage: "https://c.tenor.com/uQNoWGXo9VwAAAAd/profile-picture-discord.gif",
    content: "https://www.w3schools.com/css/paris.jpg",
    tag: "This is cool"
  }
]

const Start = () => {
  const PostConfig = {
    pictureSize: {
      x: "500",
      y: "550px"
    },
    actions: {
      like: <AiOutlineHeart />,
      comment: <AiOutlineComment />,
      share: <AiOutlineShareAlt />
    }
  };

  return(
    <div className={styles.posts_container}>
      {PlaceholderPosts.map((post) => {
        return(
          <Post 
            profileImage={post.profileImage} 
            username={post.user} 
            image={post.content}
            tag={post.tag}
            config={PostConfig} 
        />
        );
      })}

    </div>
  )
}

export default Start;