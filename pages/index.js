import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Router from "next/router";
import Product from "../components/layouts/product/Product";

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
        <button onClick={setUserDefaultSession}> set user cookie data </button>
      </main>
    );
  } else {
    return (
      <>
        <section class="product spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="section-title">
                  <h4>New product</h4>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <ul class="filter__controls">
                  <li class="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".women">Women’s</li>
                  <li data-filter=".men">Men’s</li>
                  <li data-filter=".kid">Kid’s</li>
                  <li data-filter=".accessories">Accessories</li>
                  <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
              </div>
            </div>
            <div class="row property__gallery">
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
      </>
    );
  }
}
