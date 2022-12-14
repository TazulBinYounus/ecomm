import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // const authCheck = localStorage.getItem("userData");
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (userInfo) {
      setUserData(userInfo);
      console.log(userData);
    }
    // if (!userInfo) {
    //   const payload = {
    //     userID: "01",
    //     username: "Tazul",
    //     password: "Tazul123",
    //   };
    //   localStorage.setItem("userData", JSON.stringify(payload));
    // }
  }, []);

  function setUserDefaultSession() {
    if (typeof window !== "undefined") {
      const payload = {
        userID: "01",
        username: "Tazul",
        password: "Tazul123",
      };
      localStorage.setItem("userData", JSON.stringify(payload));
      const userInfo = JSON.parse(localStorage.getItem("userData"));
      if (userInfo) {
        setUserData(userInfo);
        // console.log(userData);
      }
    }
  }

  function logout() {
    localStorage.removeItem("userData");
    setUserData(null);
  }

  if (!userData) {
    return (
      <main className={styles.main}>
        <button onClick={setUserDefaultSession}> set user data </button>
      </main>
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to
            <a href="https://nextjs.org"> {userData.username} </a> <br />
            {userData && (
              <>
                <button onClick={logout}> sign out </button>
              </>
            )}
          </h1>
        </main>
      </div>
    );
  }
}
