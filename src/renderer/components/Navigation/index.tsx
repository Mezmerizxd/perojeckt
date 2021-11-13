import { FaHome, FaUser, FaSearch } from "react-icons/fa";
import { useNavigation } from "../../hooks/Navigation";
import { NavigationButton } from "../../styles/Buttons/Buttons";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  className: string;
  currentPage: string;
}
const Navigation = ({className, currentPage}: NavigationProps) => {
  const page = currentPage.toUpperCase();
  return(
    <div className={className}>
      <div className={styles.navigation_container}>
        <h1>{page}</h1>
        <div className={styles.navigation_tabs}>
          <NavigationButton tab="start" text="Start" icon={<FaHome />}/>
          <NavigationButton tab="search" text="Search" icon={<FaSearch />}/>
          <NavigationButton tab="account" text="Account" icon={<FaUser />}/>
        </div>
      </div>
    </div>

  )
}

export default Navigation;