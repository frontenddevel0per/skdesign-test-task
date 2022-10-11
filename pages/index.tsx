import type { NextPage } from "next";
import CustomButton from "../components/button/button.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <CustomButton isDisabled>Ya zhru govno epta xdddd</CustomButton>
    </div>
  );
};

export default Home;
