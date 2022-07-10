import { Route, Routes, Navigate } from 'react-router-dom';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import SignIn from './views/sign-in/sign-in.component';
import ChartPage from './views/chart-page/chart-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute component={<SignIn />} restricted />}>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
      <Route path='/chart' element={<PrivateRoute component={<ChartPage />} />} />
      <Route path='*' element={<Navigate to='/chart' replace />} />
    </Routes>
  );
};

export default App;
