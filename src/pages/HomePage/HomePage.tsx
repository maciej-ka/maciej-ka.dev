import { useParams } from "react-router-dom"
import styles from "./HomePage.module.css"

const HomePage = () => {
  const { skill } = useParams()

  return (
    <div className={styles.page}>
      <h1>hello world, {skill}</h1>
    </div>
  )
}

export default HomePage
