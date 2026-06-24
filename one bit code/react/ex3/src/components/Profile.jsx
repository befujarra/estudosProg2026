import styles from "./styles.module.css"
import Button from "./Button"


export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt={name} />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <hr />
        <p className={styles.bio}>{bio}</p>
        <hr />
        <p className={styles.email}>{email}</p>
        <hr />
        <p className={styles.phone}>{phone}</p>
        <hr />
        <Button githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
      </div>
    </div>
  )
}   
