import type { NextPage } from "next";
import { useState } from "react";
import CustomButton from "../components/button/button.component";
import CustomInput from "../components/input-text/input-text.component";
import CustomSelect from "../components/select/select.component";
import DB from "../resources/DB/cities.json";

const StyledComponentsPage: NextPage = () => {
  const [city, setCity] = useState("");

  const updateData = (data: string) => {
    setCity(data);
  };

  return (
    <div className="wrapper">
      <CustomButton onClick={() => console.log("lol")}>
        Simple button
      </CustomButton>
      <CustomButton disabled>Disabled button</CustomButton>
      <CustomButton loading>Loading button</CustomButton>

      <CustomInput id="custominput1" />
      <CustomInput id="custominput2" label="Input with label" />
      <CustomInput
        id="custominput3"
        label="Input with error"
        error="Required input"
      />
      <CustomSelect
        id="customselect1"
        label={
          city === ""
            ? "Enter your city"
            : DB.find((item) => item.id === city)?.name
        }
        arr={DB}
        updateData={updateData}
      />
      <p>{city}</p>
    </div>
  );
};

export default StyledComponentsPage;
