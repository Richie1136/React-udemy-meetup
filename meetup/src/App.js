import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/addmeetup' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
