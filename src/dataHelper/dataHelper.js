import moment from "moment";

export const meanFunc = (time, cpu, ram, disk) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const meanReduce = (item) => Math.trunc(item.reduce(reducer) / item.length);
  const timeStart = moment.unix(time[0]).format("YYYY/MM/DD HH:mm:ss");
  const timeEnd = moment.unix(1586802291).format("YYYY/MM/DD HH:mm:ss");
  const duration = moment(timeStart).from(timeEnd, true);

  return {
    timeStart,
    timeEnd,
    duration,
    meanCpu: meanReduce(cpu),
    meanRam: meanReduce(ram),
    meanDisk: meanReduce(disk),
  };
};

export const getData = (data, time, cpu, ram, disk) => {
  data.forEach((items) =>
    Object.keys(items).map((key) => {
      switch (key) {
        case "t":
          time.push(items[key]);
          break;
        case "c":
          cpu.push(items[key]);
          break;
        case "r":
          ram.push(items[key]);
          break;
        case "d":
          items[key].map((item) => {
            disk.push(item.p);
          });
          break;
        default:
          return;
      }
    })
  );
};

export const someData = [
  {
    t: 1585484661.9659426,
    c: 88.56,
    r: 26.56,
    d: [{ n: "some_disk_name", p: 36.12 }],
  },
  {
    t: 1585484661.9659426,
    c: 89.33,
    r: 4.84,
    d: [{ n: "some_disk_name", p: 36.68 }],
  },
  {
    t: 1585484661.9659426,
    c: 95.27,
    r: 61.38,
    d: [{ n: "some_disk_name", p: 32.0 }],
  },
  {
    t: 1585484661.9659426,
    c: 42.63,
    r: 93.4,
    d: [{ n: "some_disk_name", p: 2.29 }],
  },
  {
    t: 1585484661.9659426,
    c: 36.89,
    r: 65.04,
    d: [{ n: "some_disk_name", p: 87.65 }],
  },
  {
    t: 1585484661.9659426,
    c: 24.52,
    r: 18.85,
    d: [{ n: "some_disk_name", p: 76.18 }],
  },
  {
    t: 1585484661.9659426,
    c: 66.96,
    r: 33.61,
    d: [{ n: "some_disk_name", p: 18.01 }],
  },
  {
    t: 1585484661.9659426,
    c: 9.76,
    r: 32.52,
    d: [{ n: "some_disk_name", p: 25.57 }],
  },
  {
    t: 1585484661.9659426,
    c: 35.7,
    r: 46.14,
    d: [{ n: "some_disk_name", p: 32.06 }],
  },
  {
    t: 1585484661.9659426,
    c: 72.51,
    r: 42.58,
    d: [{ n: "some_disk_name", p: 24.63 }],
  },
];

export const initialState = {
  series: [
    {
      name: "cpu",
      data: [31, 40, 28, 51, 42, 70, 80],
    },
    {
      name: "ram",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "disk",
      data: [15, 38, 41, 38, 32, 56, 49],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T00:15:00.000Z",
        "2018-09-19T00:30:00.000Z",
        "2018-09-19T00:45:00.000Z",
        "2018-09-19T01:00:00.000Z",
        "2018-09-19T01:15:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T01:45:00.000Z",
        "2018-09-19T02:00:00.000Z",
        "2018-09-19T02:15:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
