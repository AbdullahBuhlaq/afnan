const searchOptions = {
  doctors: {
    name: { name: "Name", type: "text" },
    gender: { name: "gender", type: "select" },
    address: { name: "address", type: "text" },
    medicalSpecialty: { name: "Medical Specialty", type: "select" },
  },
  medicines: { name: { name: "Name", type: "text" } },
  diseases: { name: { name: "Name", type: "text" } },

  diagnosis: {
    blood_pressure: { name: "Blood Pressure", type: "text" },
    cholesterol: { name: "Colesterol", type: "number" },
    createdAt: { name: "Date", type: "date" },
    description: { name: "Description", type: "text" },
    note: { name: "Note", type: "text" },
    ["diseaseType.name"]: { name: "Disease", type: "text" },
    ["doctor.user.name"]: { name: "Doctor", type: "text" },
    heart_beat: { name: "Heart Rate", type: "number" },
    sugar: { name: "Sugar", type: "number" },
    ["medicine.name"]: { name: "Medicine", type: "Text" },
  },
};

export default searchOptions;
