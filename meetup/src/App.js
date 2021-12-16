import { Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/newmeetups' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
