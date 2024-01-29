import Image from "next/image";
import styles from "./page.module.css";
import Homes from "@/component/Home/home";
import Logo from "@/component/logo/logo";

export default function Home() {
  return (
    <main style={{ marginTop: "100px" }}>
      <Homes />
    </main>
  );
}
