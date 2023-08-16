import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"Header"}
          leftChild={<MyButton text={"<"} />}
          rightChild={<MyButton text={">"} />}
        />
        <h2>App</h2>
        <MyButton
          text={`버튼`}
          onClick={() => alert("클릭")}
          type={"positive"}
        />
        <MyButton
          text={`버튼`}
          onClick={() => alert("클릭")}
          type={"negative"}
        />
        <MyButton text={`버튼`} onClick={() => alert("클릭")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
