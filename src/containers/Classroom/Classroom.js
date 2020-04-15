import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import ItemsList from "../../components/ItemsList/ItemsList";
import styles from "./Classroom.module.css";

export const Classroom = (props) => {

  const [data, setData] = useState(null);

  const { request} = useHttp();

  const fetchComputers = useCallback(async (id) => {
    try {
      const fetched = await request(
        "http://localhost:8000/GetComputers",
        "POST",
        { d: { a: id } }
      );
      setData(fetched.d);
    } catch (e) {
      console.log(e);
    }
  }, [request]);

  useEffect(() => {
    fetchComputers(props.match.params.id);
  }, [fetchComputers, props.match.params.id]);

  return (
    <>
      <div className={styles.Classroom}>
          <div className={styles.ClassroomWrapper}>
            <h1>Classroom № {props.match.params.id} </h1>
            <ItemsList data={data} title={"PC № "} />
          </div>
      </div>
    </>
  );
};
