import propTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
const R = require('ramda');

const useBlocks = () => {
  const [state, setState] = React.useState({});

  const toggleOpened = (name) => {
    setState(R.over(R.lensPath([name, 'opened']), R.not));
  };

  const canClose = (name) => R.path([name, 'canClose'], state);
  const opened = (name) => R.path([name, 'opened'], state);
  const setOpened = (name, bool) => setState(R.assocPath([name, 'opened'], bool));

  const register = (props) => (name) => {
    setState(R.assoc(name, {
      opened: R.propOr(true, 'opened', props),
      canClose: R.propOr(true, 'canClose', props)
    }));
  };

  return {
    register,
    controls: {
      canClose,
      toggleOpened,
      opened,
      setOpened
    }
  };
};

/**
 *
 */
const Block = ({
  children,
  titleColor,
  color,
  title,
  opened,
  actions,
  onToggleOpened
}) => {
  const $onToggleOpened = () => {
    !R.isNil(onToggleOpened) && onToggleOpened();
  };

  return (
    <div className={classNames('f-block', { 'f-block-blue': color === 'blue' })}>
      <div className='flex flex-row items-center justify-between'>
        {!R.isNil(title) && <h2 className={`f-block-title text-${titleColor}`}>{title}</h2>}
        {!R.isNil(actions) && actions}
        {!R.isNil(opened) && (
          <div className="f-block-arrow-container" onClick={$onToggleOpened}>
            <img src={`/icon/${opened() ? 'arrow-up' : 'arrow-down'}.svg`}/>
          </div>
        )}
      </div>

      <div className="f-block-body">
        {!R.isNil(opened) && opened() && children }
        {R.isNil(opened) && children}
      </div>
    </div>
  );
};

const BlockContainer = ({
  name,
  register,
  controls,
  color,
  titleColor,
  title,
  actions,
  children
}) => {
  React.useEffect(() => {
    if (R.is(Function, register)) {
      if (R.isNil(name)) return console.error('name must be defined');
      register(name);
    }
  }, []);

  return (
    <Block
      title={title}
      titleColor={R.isNil(titleColor) ? color : titleColor}
      color={color}
      actions={actions}
      opened={R.isNil(controls) || !controls.canClose(name) ? undefined : () => controls.opened(name)}
      onToggleOpened={R.isNil(controls) || !controls.canClose(name) ? undefined : () => controls.toggleOpened(name)}
    >
      {children}
    </Block>
  );
};

BlockContainer.defaultProps = {
  canClose: false
};

BlockContainer.propTypes = {
  name: propTypes.string.isRequired,
  register: propTypes.func.isRequired,
  controls: propTypes.object.isRequired,
  color: propTypes.string.isRequired,
  titleColor: propTypes.string,
  title: propTypes.oneOfType([
    propTypes.string,
    propTypes.element
  ])
};

BlockContainer.useBlocks = useBlocks;

export default BlockContainer;
