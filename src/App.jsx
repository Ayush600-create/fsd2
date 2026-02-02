
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';
import Experiment3 from './components/Experiment3';
import Experiment4 from './components/Experiment4';

function App() {
  return (
    <div>
      <div className="bg-light py-3 mb-4 border-bottom">
        <div className="container">
          <h1 className="text-center">FSD Unit-2 Lab Experiments</h1>
        </div>
      </div>

      <div className="container">
        <section className="mb-5 border p-4 rounded bg-white">
          <Experiment4 />
        </section>

        <section className="mb-5 border p-4 rounded bg-white">
          <Experiment1 />
        </section>

        <section className="mb-5 border p-4 rounded bg-white">
          <Experiment2 />
        </section>

        <section className="mb-5 border p-4 rounded bg-white">
          <Experiment3 />
        </section>
      </div>
    </div>
  );
}

export default App;
