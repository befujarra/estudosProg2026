import styles from "./styles.module.css"


export default function Button({githubUrl, linkedinUrl }) {
  return (

        <div className={styles.links}>
          <button className={styles.githubButton} onClick={() => window.open(githubUrl, "_blank")}>GitHub</button>
          <button className={styles.linkedinButton} onClick={() => window.open(linkedinUrl, "_blank")}>LinkedIn</button>
        </div>
  )
}   
