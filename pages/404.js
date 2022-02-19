import styleserr from "../styles/404.module.css";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className={styleserr.err}>
      404 - Page Not Found <p>Go to <Link href="/">Home</Link></p>
    </div>
  );
}
