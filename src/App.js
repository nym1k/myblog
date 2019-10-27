import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Blog />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
