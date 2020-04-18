import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Loader } from "../../components/Loader/Loader";
import Chart from "react-apexcharts";
import { MeanData } from "../../components/MeanData/MeanData";
import { setupDataChart } from "../../dataHelper/dataHelper";
import DataHelper from "../../dataHelper/dataHelper";
import "./ItemDetails.css";
import { Recommendations } from "../../components/Recommendations/Recommendations";

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
        const allDisksFloat = [];

        const fetched = await request(
          `http://localhost:8000/GetComputer`,
          "POST",
          { d: { n: parseKey[2], a: parseKey[1] } }
        );
        const dataFetch = await fetched.d.d.f;

        const uniqueDisksKeys = dataFetch.map((items) =>
          items.d.map((item) => item.n)
        )[0];

        if (dataFetch !== undefined) {
          DataHelper.getData(dataFetch, time, cpu, ram, disks);
        } else {
          throw new Error('No data!');
        }

        
        

        let newSeries = [
          {
            name: "CPU",
            data: [...cpu],
          },
          {
            name: "RAM",
            data: [...ram],
          },
        ];

        const formatedDiskData = uniqueDisksKeys.map((name) => {
          return { name: name, data: DataHelper.getDiskData(name, disks) };
        });

        formatedDiskData.forEach((item) => {
          newSeries.push(item);
        });

        formatedDiskData.map((items) =>
          items.data.map((item) => allDisksFloat.push(item))
        );

        data.series = newSeries;

        data.options.xaxis.categories = [...DataHelper.formatedTime(time)];
        console.log(data.options.xaxis.categories);
        setMeanData(DataHelper.meanFunc(time, cpu, ram, allDisksFloat));

        setData(data);
      } catch (e) {
        console.log(e);
      }
    },
    [request]
  );


  useEffect(() => {
    fetchPcInfo(setupDataChart, parseKey);
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
            <Recommendations data={MeanData}/>
          </>
        )}
      </div>
    </>
  );
};
