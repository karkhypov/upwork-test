import { Route, Routes, Navigate } from 'react-router-dom';

import SignIn from './views/sign-in/sign-in.component';
import ChartPage from './views/chart-page/chart-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<SignIn />} />
        <Route path='chart' element={<ChartPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
};

export default App;
