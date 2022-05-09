import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(true);

  // function to handle the resize of the window.
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setIsBurgerMenuClicked(true);
    } else {
      setIsBurgerMenuClicked(false);
    }
  };
  const handleBurgerClick = () => {
    let status = isBurgerMenuClicked ? false : true;
    setIsBurgerMenuClicked(status);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.company_logo}>RENGEB</div>
      <div
        onClick={handleBurgerClick}
        // style={{ display: this.state.burgerClass }}
        className={styles.burger}
      >
        <div
          style={{
            transform: `${
              isBurgerMenuClicked ? "rotate(45deg) translateY(12px)" : ""
            }`,
          }}
          className={styles.big_line}
        ></div>
        <div
          style={{ opacity: `${isBurgerMenuClicked ? 0 : 1}` }}
          className={styles.small_line}
        ></div>
        <div
          style={{
            transform: `${
              isBurgerMenuClicked ? "rotate(-45deg) translateY(-12px)" : ""
            }`,
          }}
          className={styles.big_line}
        ></div>
      </div>
      <div
        style={{
          transform: `${
            isBurgerMenuClicked ? "translateX(0)" : "translateX(100%)"
          }`,
        }}
        className={styles.flex_box}
      >
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </div>
        <div className={styles.container}>
          <Link href="/contact" passHref>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
