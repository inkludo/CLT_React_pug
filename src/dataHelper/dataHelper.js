import moment from "moment";

export const formatedTime = (time) => {
  const format = time.map((item) => {
    return moment.unix(item).format();
  });
  return format;
};

export const meanFunc = (time, cpu, ram, diskC, diskD) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const meanReduce = (item) => Math.trunc(item.reduce(reducer) / item.length);

  const timeStart = moment.unix(time[0]).format("YYYY/MM/DD HH:mm:ss");
  const timeEnd = moment
    .unix(time[time.length - 1])
    .format("YYYY/MM/DD HH:mm:ss");
  const duration = moment(timeStart).from(timeEnd, true);

  return {
    timeStart,
    timeEnd,
    duration,
    meanCpu: meanReduce(cpu),
    meanRam: meanReduce(ram),
    meanDisk: (meanReduce(diskC) + meanReduce(diskD) )/2,
  };
};

export const getDiskInfo = (disks, diskC, diskD) =>
  disks.map((item) => {
    switch (item.name) {
      case "C:\\":
        diskC.push(item.data);
        break;
      case "D:\\":
        diskD.push(item.data);
    }
  });

export const getData = (data, time, cpu, ram, disks) => {
  let diskC = [];
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
            switch (item.n) {
              case `${item.n}`:
                disks.push({ name: item.n, data: item.p });
                break;
            }
          });
          break;
        default:
          return;
      }
    })
  );
};
export const initialState = {
  series: [
    {
      name: "CPU",
      data: [],
    },
    {
      name: "RAM",
      data: [],
    },
    {
      name: "Disk C",
      data: [],
    },
    {
      name: "Disk D",
      data: [],
    }
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
      categories: [],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
