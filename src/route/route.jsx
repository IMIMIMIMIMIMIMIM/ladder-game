import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/main/main";
import Template from "../components/template";
const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="" element={<Main></Main>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
