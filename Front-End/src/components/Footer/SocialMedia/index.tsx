import styles from "./styles.module.scss";

import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';

export function SocialMedia(props) {
  return (
    <>
      <button className={styles.socialMedias}>
        {
          props.social === 'instagram' ? <FaInstagram color="#fff" /> : props.social === 'dribbble' ? <FaDribbble color="#fff" /> : props.social === 'twitter' ? <FaTwitter color="#fff" /> : <FaYoutube color="#fff" />
        }
      </button>
    </>
  );
}
