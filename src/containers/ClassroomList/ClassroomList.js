import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Loader } from "../../components/Loader/Loader";
import ItemsList from "../../components/ItemsList/ItemsList";
import styles from "./ClassroomList.module.css";

export const ClassroomList = () => {
  

  const [classroom, setClassroom] = useState(null);

  const { request, loading } = useHttp();

  const fetchClassroomList = useCallback(async () => {
    try {
      const fetched = await request(
        `http://localhost:8000/GetAuditoriums`,
        "GET",
        null
      );
      console.log(fetched);

      setClassroom(fetched.d);
    } catch (e) {
      console.log(e);
    }
  }, [request]);

  useEffect(() => {
    fetchClassroomList();
  }, [fetchClassroomList]);



  return (
    <>
    <div className={styles.ClassroomList}>
    
      {loading && <Loader/>}
      {!loading && (
          <div className={styles.ClassroomListWrapper}>
           <h1>Classroom List</h1>
            <ItemsList data={classroom} title={"Classroom: "} />
          </div>
      )}
       </div>
    </>
  );
};
