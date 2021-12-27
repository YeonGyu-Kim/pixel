import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContentsDetail from "./components/contents/contentsDetail";
import ContentList from "./components/contents/contentsList";
import Header from "./components/header";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContentList />} />
          <Route path='/detail' element={<ContentsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
