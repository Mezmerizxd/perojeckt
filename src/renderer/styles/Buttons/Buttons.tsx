import { useNavigation } from "../../hooks/Navigation"
import styles from "./Buttons.module.scss";

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tab: string;
  text: string;
  icon: React.ReactNode;
}
export const NavigationButton = ({tab, text, icon}: NavigationButtonProps) => {
  const {page, setPage} = useNavigation();
  return(
    <button onClick={() => setPage(tab)} className={styles.navigation_button}>
      <div>
        <i>{icon} </i>
        <p>{text}</p>
      </div>
    </button>
  )
}