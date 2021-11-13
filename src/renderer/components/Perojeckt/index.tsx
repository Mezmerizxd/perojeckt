import { useNavigation } from "../../hooks/Navigation"
import Navigation from "../Navigation";
import Start from "./Start";
import styles from "./Perojeckt.module.scss";

const Perojeckt = () => {
  const {page} = useNavigation();
  return(
		<div className={styles.perojeckt}>
			<Navigation className={styles.navigation} currentPage={page} />
			<div className={styles.pages}>
				{page == "start" && <Start />}
			</div>
		</div>
  )
}

export default Perojeckt;