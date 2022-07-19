import React, { Fragment } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Layout>
        <Home />
      </Layout>
    </Fragment>
  );
}

export default App;
