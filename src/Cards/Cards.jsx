import React, { useEffect, useState } from "react";
import "./Cards.css";
import { cardsData } from "../Data/Data";

import Card from "../Card/Card";

const Cards = (props) => {
  const [cardsDataState, setCardsDataState] = useState(cardsData);
  async function setData() {
    let info = { data: { heart_beat: [], sugar: [], blood_pressure_Up: [], blood_pressure_Bottom: [], cholesterol: [] }, categories: [] };
    await Promise.all(
      props.patientInfo.diagnosis.map((diag, diagIndex) => {
        info.data.heart_beat = [...info.data.heart_beat, diag.heart_beat];
        info.data.sugar = [...info.data.sugar, diag.sugar];
        info.data.blood_pressure_Up = [...info.data.blood_pressure_Up, parseInt(diag.blood_pressure.substring(3, 5))];
        info.data.blood_pressure_Bottom = [...info.data.blood_pressure_Bottom, parseInt(diag.blood_pressure.substring(0, 2))];
        info.data.cholesterol = [...info.data.cholesterol, diag.cholesterol];
        info.categories = [...info.categories, diag.createdAt];
      })
    );
    setCardsDataState({
      ...cardsDataState,
      heart_beat: { ...cardsDataState.heart_beat, value: props.patientInfo.diagnosis[props.patientInfo.diagnosis.length - 1].heart_beat, categories: info.categories, series: [{ name: "Heart Beat", data: info.data.heart_beat }] },
      sugar: { ...cardsDataState.sugar, value: props.patientInfo.diagnosis[props.patientInfo.diagnosis.length - 1].sugar, categories: info.categories, series: [{ name: "Sugar", data: info.data.sugar }] },
      blood_pressure: {
        ...cardsDataState.blood_pressure,
        value: props.patientInfo.diagnosis[props.patientInfo.diagnosis.length - 1].blood_pressure,
        categories: info.categories,
        series: [
          { name: "Systolic Blood Pressure", data: info.data.blood_pressure_Up },
          { name: "Diastolic Blood Pressure", data: info.data.blood_pressure_Bottom },
        ],
      },
      cholesterol: { ...cardsDataState.cholesterol, value: props.patientInfo.diagnosis[props.patientInfo.diagnosis.length - 1].cholesterol, categories: info.categories, series: [{ name: "Cholesterol", data: info.data.cholesterol }] },
    });
  }
  useEffect(() => {
    if (cardsDataState) {
      setData();
    }
  }, [props.patientInfo]);

  try {
    return (
      <div className="cards">
        {Object.keys(cardsDataState).map((cardKey, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card index={id} unit={cardsDataState[cardKey].unit} title={cardsDataState[cardKey].title} color={cardsDataState[cardKey].color} barValue={cardsDataState[cardKey].barValue} value={cardsDataState[cardKey].value} png={cardsDataState[cardKey].png} series={cardsDataState[cardKey].series} categories={cardsDataState[cardKey].categories} />
            </div>
          );
        })}
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Cards;
