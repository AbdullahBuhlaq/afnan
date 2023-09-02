import { GiHeartOrgan, GiCoolSpices } from "react-icons/gi";
import { BsDropletHalf } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";

export const cardsData = {
  blood_pressure: {
    unit: "mmHg",
    title: "Blood Pressure",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 100,
    value: "25,970",
    png: BsFillHeartPulseFill,
    series: [
      {
        name: "Blood Pressure",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    categories: [],
  },
  sugar: {
    unit: "mmol/L",
    title: "Glucose Level",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 100,
    value: "14,270",
    png: GiCoolSpices,
    series: [
      {
        name: "Glucose Level",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    categories: [new Date().now, new Date().now,new Date().now,new Date().now,new Date().now,new Date().now,new Date().now,new Date().now],
  },
  heart_beat: {
    unit: "BPM",
    title: "Heart Beat",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 100,
    value: "14,270",
    png: GiHeartOrgan,
    series: [
      {
        name: "Heart Beat",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    categories: [],
  },
  cholesterol: {
    unit: "mg/dL",
    title: "Cholesterol",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 100,
    value: "4,270",
    png: BsDropletHalf,
    series: [
      {
        name: "Cholesterol",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
    categories: [],
  },
};
