import React, { useContext } from 'react';
const R = require('ramda');

export const MeasureContext = React.createContext();

export default function withMeasures (Component) {
  return function MeasureComponent (props) {
    return (
      <MeasureContext.Consumer>
        {dimensions => <Component {...props} dimensions={dimensions}/>}
      </MeasureContext.Consumer>
    );
  };
}

export const SCREEN_TYPE = {
  mobile: 0,
  tablet: 1,
  laptop: 2,
  desktop: 3
};

export const useMeasure = () => {
  const dimensions = useContext(MeasureContext);

  const format = R.cond([
    [isMobile, (w) => ({ format: SCREEN_TYPE.mobile, size: w - 48 })],
    [isTablet, R.always({ format: SCREEN_TYPE.tablet, size: 768 })],
    [isLaptop, R.always({ format: SCREEN_TYPE.laptop, size: 900 })],
    [isDesktop, R.always({ format: SCREEN_TYPE.desktop, size: 900 })],
    [R.T, R.always({ format: SCREEN_TYPE.desktop, size: 900 })]
  ])(R.propOr(0, 'width', dimensions));

  return { dimensions, ...format };
};

export const isMobile = (width) => width < 768;
export const isTablet = (width) => width < 992 && width >= 768;
export const isLaptop = (width) => width < 1280 && width >= 992;
export const isDesktop = (width) => width >= 1280;
