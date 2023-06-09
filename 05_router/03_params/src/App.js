import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import About from './pages/About';
import Main from './pages/Main';
import Menu from './pages/Menu';
import MenuDetails from './pages/MenuDetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="about" element={ <About/> }/>
          <Route path="menu" element={ <Menu/> }>
            <Route index element={ <Menu/>}/>
            <Route path=":menuCode" element={ <MenuDetails/> }/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
