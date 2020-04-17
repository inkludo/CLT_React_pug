import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Loader } from "../../components/Loader/Loader";
import Chart from "react-apexcharts";
import { MeanData } from "../../components/MeanData/MeanData";
import {
  getData,
  meanFunc,
  initialState,
  formatedTime,
  getDiskInfo
} from "../../dataHelper/dataHelper";
import "./ItemDetails.css";

export const ItemDetails = (props) => {
  const [data, setData] = useState(null);
  const [meanData, setMeanData] = useState(null);

  const { request } = useHttp();

  const parseKey = props.match.params.id.match(/a=(\d+)n=(\d+)/);

  const fetchPcInfo = useCallback(
    async (data, parseKey) => {
      try {
        const time = [];
        const cpu = [];
        const ram = [];
        const disks = [];
        const diskC = [];
        const diskD = [];

        const fetched = await request(
          `http://localhost:8000/GetComputer`,
          "POST",
          { d: { n: parseKey[2], a: parseKey[1] } }
        );
        const dataFetch = await fetched.d.d.f;

        if (dataFetch !== undefined) {
          getData(dataFetch, time, cpu, ram, disks);
        } else {
          throw new Error();
        }

        const copyData = { ...data };

        getDiskInfo(disks, diskC, diskD);

        copyData.series.map((item) => {
          const { name } = item;
          switch (name) {
            case "CPU":
              item.data = [...cpu];
              break;
            case "RAM":
              item.data = [...ram];
              break;
            case "Disk C":
              item.data = [...diskC];
              break;
            case "Disk D":
              item.data = [...diskD];
              break;
            default:
              return;
          }

          return item;
        });

        copyData.options.xaxis.categories = [...formatedTime(time)];

        setMeanData(meanFunc(time, cpu, ram, diskC, diskD));

        setData(copyData);
      } catch (e) {
        console.log(e);
      }
    },
    [request]
  );

  useEffect(() => {
    fetchPcInfo(initialState, parseKey);
  }, [fetchPcInfo]);

  return (
    <>
      <div className="containerData">
        <h2>
          Classroom № {parseKey[1]} PC № {parseKey[2]}
        </h2>
        {!data ? (
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
