import { useEffect, useRef } from "react";
import { Area } from "@antv/g2plot";

// import { AREA_COLORS } from "../constants";
import useFetchData from "../hooks/fetchData";

const config = {
  data: [],
  xField: "year",
  yField: "value",
  seriesField: "category",
  color: AREA_COLORS,
  xAxis: {
    type: "time",
    mask: "YYYY",
  },
  yAxis: {
    label: {
      formatter: function formatter(v) {
        return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
          return "".concat(s, ",");
        });
      },
    },
  },
  legend: { position: "right" },
  interactions: [{ type: "element-active" }],
};

const G2PlotArea = () => {
  const ref = useRef();
  const [data] = useFetchData();

  useEffect(() => {
    if (ref.current && data.length > 0) {
      config.data = data;
      const area = new Area(ref.current, config);
      area.render();
    }
  }, [data]);

  return (
    <>
      <h1>G2Plot</h1>
      <h3>二氧化碳排放量来源</h3>
      <div ref={ref} />
    </>
  );
};

export default G2PlotArea;
