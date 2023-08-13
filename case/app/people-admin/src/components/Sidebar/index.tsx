import { ChevronDownRegular } from "@fluentui/react-icons";
import styles from "./app.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={styles.drawerIconContainer} 
      onClick={() => setIsExpanded((prevState) => !prevState)}
    >
      <ChevronDownRegular className={styles.drawerIcon} style={{transform: `rotate(${isExpanded ? 180 : 0}deg)`}} />
      {isExpanded ? <div className={styles.drawer}>
        <Link to="/" className={styles.drawerLink}>HOME</Link>
        <Link to="/people" className={styles.drawerLink}>PEOPLE</Link>
      </div> : null}
    </div>
  )
}

export default Sidebar