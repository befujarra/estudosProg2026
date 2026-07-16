import Title from "./components/Title.jsx"
import Subtitle from "./components/Subtitle.jsx"
import Status from "./components/StatusText.jsx"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Status />
    </div>
  )
}