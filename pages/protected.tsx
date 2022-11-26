import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Protected: NextPage = (): JSX.Element => {
//   const { status, data } = useSession();
  const { data: session, status } = useSession()
  console.log(status)

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div className={styles.container}>
        This page is Protected for special people. like{"\n"}
        <pre>{JSON.stringify(session.user, null, 2)}</pre>
      </div>
    );
  return <div>loading...</div>;
};

export default Protected;