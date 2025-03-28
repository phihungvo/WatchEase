import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, resultsRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout

            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }>
            </Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
