import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <HashRouter>
        <LoadingBar color="#f11946" height={3.5} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} key="general" pageSize={12} category="general" country="in" />}
          ></Route>
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} key="business" pageSize={12} category="business" country="in" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} pageSize={12} key="entertainment" category="entertainment" country="in" />}
          ></Route>
          <Route
            exact
            path="/health"
            key="health"
            element={<News setProgress={setProgress} key="health" pageSize={12} category="health" country="in" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} key="science" pageSize={12} category="science" country="in" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} key="sports" pageSize={12} category="sports" country="in" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} key="technology" pageSize={12} category="technology" country="in" />}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
export default App;
