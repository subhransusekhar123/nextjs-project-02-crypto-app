import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>
          coin DCX
        </h1>
      </div>
      {children}
    </div>
  )
}

export default Layout