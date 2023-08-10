import './App.scss'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ArtworkList from './components/ArtworkList';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/artworklist" element={<ArtworkList/>}/>

    </Routes>
    </>
  )
}

export default App;