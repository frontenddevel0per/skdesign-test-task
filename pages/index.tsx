import type { NextPage } from "next";
import RequestForm from "../components/request-form/request-form.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <RequestForm />
    </div>
  );
};

export default Home;
