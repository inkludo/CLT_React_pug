import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Loader } from "../../components/Loader/Loader";
import Chart from "react-apexcharts";
import { MeanData } from "../../components/MeanData/MeanData";
import {
  getData,
  someData,
  meanFunc,
  initialState,
} from "../../dataHelper/dataHelper";
import "./ItemDetails.css";

export const ItemDetails = (props) => {
  const [data, setData] = useState(initialState);
  const [meanData, setMeanData] = useState(null);

  const { request, loading } = useHttp();

  const parseKey = props.match.params.id.match(/a=(\d+)n=(\d+)/);

  const fetchPcInfo = useCallback(
    async (data, parseKey) => {
      try {
        const time = [];
        const cpu = [];
        const ram = [];
        const disk = [];

        const fetched1 = await request(
          `http://localhost:8000/GetComputer`,
          "POST",
          { d: { n: parseKey[1], a: parseKey[2] } }
        );
        console.log(fetched1);

        const fetched = await { ...data };
        getData(someData, time, cpu, ram, disk);
        const pushNewData = fetched.series.map((item) => {
          const { name } = item;
          switch (name) {
            case "cpu":
              item.data = [...cpu];
              break;
            case "ram":
              item.data = [...ram];
              break;
            case "disk":
              item.data = [...disk];
              break;
            default:
              return ;
          }

          return item;
        });

        setMeanData(meanFunc(time, cpu, ram, disk));

        fetched.series = [...pushNewData];

        setData(fetched);
      } catch (e) {
        console.log(e);
      }
    },
    [request]
  );

  useEffect(() => {
    fetchPcInfo(data, parseKey);
  }, [fetchPcInfo]);


  return (
    <>
      <div className="containerData">
        <h4>
          Classroom № {parseKey[1]} PC № {parseKey[2]}
        </h4>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div style={{ width: "70vw" }}>
              <Chart
                className="chart"
                options={data.options}
                series={data.series}
                type="area"
                height={400}
              />
            </div>
            <MeanData data={meanData} />
          </>
        )}
      </div>
    </>
  );
};
