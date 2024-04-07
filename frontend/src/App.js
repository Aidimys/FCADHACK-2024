import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import MainIsLoading from './components/MainIsLoading/MainIsLoading';
import {
  fetchActivity,
  selectorIsLoading as selectorIsLoadingActivity,
} from './redux/slices/activityListSlice';
import {
  fetchStudents,
  selectorIsLoading as selectorIsLoadingStudents,
} from './redux/slices/studentsListSlice';
//import {
// setIsMainLoaded,
// selectorIsMainLoaded,
//} from './redux/slices/isMainLoadedSlice';

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const GET_URL_ACTIVITY = 'http://localhost:5000/activity';
  const GET_URL_STUDENTS = 'http://localhost:5000/students';

  const isLoadingActivity = useSelector(selectorIsLoadingActivity);
  const isLoadingStudents = useSelector(selectorIsLoadingStudents);

  useEffect(() => {
    dispatch(fetchActivity(GET_URL_ACTIVITY));
    dispatch(fetchStudents(GET_URL_STUDENTS));
  }, []);
  useEffect(() => {
    if (!isLoadingActivity && !isLoadingStudents) {
      setTimeout(() => setIsLoaded(true), 1000);
    }
  }, [isLoadingActivity, isLoadingStudents]);
  return (
    <BrowserRouter>
      <Routes>
        {isLoaded ? (
          <>
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
                  <HomeHeader />
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
            <Route
              path="*"
              element={
                <>
                  <BreadHeader />
                  <NotFound />
                  <Footer />
                </>
              }
            />
          </>
        ) : (
          <Route
            path="*"
            element={
              <MainIsLoading
                action="waiting"
                state={
                  !isLoadingActivity &&
                  !isLoadingStudents &&
                  document.readyState === 'complete'
                }
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
