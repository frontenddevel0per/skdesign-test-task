import type { NextPage } from "next";
import CustomButton from "../components/button/button.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <CustomButton>Пример текста</CustomButton>
    </div>
  );
};

export default Home;
