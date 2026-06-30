import styles from "./styles.module.css"


export default function Button(props) {
  return (

        <div className={styles.links}>
          <button className={styles.btnLinks} onClick={() => window.open(props.githubUrl, "_blank")}>{props.children}</button>
        </div>
  )
}   
