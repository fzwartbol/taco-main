import Image from "next/image";
import styles from "../pages/design/style.module.css";
import Link from "next/link";
import {UserContext} from "./UserContext";
import {useContext} from "react";

export default function Layout({ children }) {
    const {user, setUser} = useContext(UserContext);
  return (
    <div  style={{textAlign: "center", width: "100%"}}>
        <Image src="/TacoCloud.png"  className={styles.rotate} height={200} width={200} style={{float: "right", margin: "20px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", border: "2px dashed black", padding: "20px"}}>
            <Link href="/">
                <button className={styles.menuButton}>Home</button>
            </Link>
            <Link href="/menu">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <button className={styles.menuButton}>Browse Taco's</button>
            </Link>
            <Link href="/recent">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <button className={styles.menuButton}>Recently Ordered</button>
            </Link>
            <Link href="/design">
                <button className={styles.menuButton}>Design Your Own</button>
            </Link>
            <Link href="/cart">
                <button className={styles.menuButton}>Go to My Cart</button>
            </Link>
        </div>
        { user && <h2>Welcome back!! {user.username}</h2>}
      <main>{children}</main>
    </div>
  )
}