import type { NextPage } from "next";
import CustomButton from "../components/button/button.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <CustomButton>Simple button</CustomButton>
      <CustomButton isDisabled>Disabled button</CustomButton>
      <CustomButton isLoading>Loading button</CustomButton>
    </div>
  );
};

export default Home;
