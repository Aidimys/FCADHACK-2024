import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomeHeader from './components/HomePage/HomeHeader/HomeHeader';
import HomeMain from './components/HomePage/HomeMain/HomeMain';
import Footer from './components/HomePage/Footer/Footer';
import Account from './components/Account/Account';
import NotFound from './components/NotFound/NotFound';
import Students from './components/Students/Students/Students';
import BreadHeader from './components/BreadHeader/BreadHeader';
import SingleStudent from './components/Students/SingleStudent/SingleStudent';
import Organizations from './components/Organizations/Organizations/Organizations';
import SingleOrganization from './components/Organizations/SingleOrganization/SingleOrganization';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <HomeHeader />
              <HomeMain />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <BreadHeader />
              <Account />
              <Footer />
            </>
          }
        />
        <Route
          path="/students"
          element={
            <>
              <HomeHeader />
              <Students />
              <Footer />
            </>
          }
        />
        <Route
          path="/students/:studentIв"
          element={
            <>
              <BreadHeader />
              <SingleStudent />
              <Footer />
            </>
          }
        />
        <Route
          path="/organizations"
          element={
            <>
              <HomeMain />
              <Organizations />
              <Footer />
            </>
          }
        />
        <Route
          path="/organizations/:organizationSlug"
          element={
            <>
              <BreadHeader />
              <SingleOrganization />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
