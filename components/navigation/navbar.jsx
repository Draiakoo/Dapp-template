import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import {useSession, signIn, signOut} from "next-auth/react";



export default function Navbar() {

	const {data: session} = useSession();

	console.log(session);

	if(session){
		return(
			<nav className={styles.navbar}>
			<ConnectButton></ConnectButton>
			<div className={styles.flexed}>
				<button className={styles.githubButton} onClick={() => signOut()}>
					Sign out
				</button>
				<div className={styles.flexed}>
					<img 
						src={session.user.image}
						alt="profile image"
						height={40}
						width={40}github
						className={styles.logoImage}
					/>
					<a href="/profile">{session.user.name}</a>
				</div>
			</div>
			</nav>
		)
	}

	return (
		<nav className={styles.navbar}>
			<ConnectButton></ConnectButton>
			<div className={styles.flexed}>
				<button className={styles.githubButton} onClick={() => signIn()}>
					Sign in GitHub
				</button>
			</div>
		</nav>
	);
}
