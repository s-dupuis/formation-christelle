import React, { useState } from 'react';
import GQLEnvironment from './_graphql/Environment';
import Preface from '@@pages/preface';
import { MeasureContext } from '@@hooks/useMeasure';
import Measure from 'react-measure';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SanteTns from './pages/SanteTns';

const { RelayEnvironmentProvider } = require('react-relay/hooks');

const RoutesComponent = () => {
  const [dimensions, setDimensions] = useState({ height: -1, width: -1 });
  const onResize = (contentRect) => {
    setDimensions(contentRect.bounds);
  };

  return <div className="container mx-auto">
    <Measure bounds onResize={onResize}>
      {({ measureRef }) => (
        <div className="f-demo-container" ref={measureRef}>
          <MeasureContext.Provider value={dimensions}>
            <RelayEnvironmentProvider environment={GQLEnvironment.get()}>
              <Router>
                <Routes>
                  <Route exact path="/" element={<Preface/>} />
                  <Route exact path="/sante-tns" element={<SanteTns/>} />
                </Routes>
              </Router>
            </RelayEnvironmentProvider>
          </MeasureContext.Provider>
        </div>
      )}
    </Measure>
  </div>;
};

export default RoutesComponent;
