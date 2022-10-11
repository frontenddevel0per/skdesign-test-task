import type { NextPage } from "next";
import CustomButton from "../components/button/button.component";
import CustomInput from "../components/input-text/input-text.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <CustomButton>Simple button</CustomButton>
      <CustomButton isDisabled>Disabled button</CustomButton>
      <CustomButton isLoading>Loading button</CustomButton>

      <CustomInput id="custominput1" />
      <CustomInput id="custominput2" label="Input with label" />
      <CustomInput
        id="custominput3"
        label="Input with error"
        error="Required input"
      />
    </div>
  );
};

export default Home;
