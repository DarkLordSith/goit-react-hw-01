import PropTypes from "prop-types";
// import clsx from "clsx";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.profile}>
          <span>Followers: {stats.followers}</span>
        </li>
        <li className={styles.profile}>
          <span>Views: {stats.views}</span>
        </li>
        <li className={styles.profile}>
          <span>Likes: {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Додаємо PropTypes для перевірки типів пропсів
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
