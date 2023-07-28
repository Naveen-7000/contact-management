import React from "react";
import Layout from "./components/Layout";
import Home from "./routes/home";
interface Props{
  title:string,
}
const App:React.FC<Props>=({title})=>{
  return (
    <Layout>
      <Home title={title} />
    </Layout>
  );
}

export default App;
