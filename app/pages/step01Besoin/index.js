import React from 'react';
import Step01 from './Step01';
import SubStep01 from './SubStep01';

import { builder } from '@fasstech/contract_hook';

const R = require('ramda');

const subStep01 = R.pipe(
  builder.define('step_01_sub_step_01', 'Qui souhaitez-vous assurer ?'),
  builder.renderWith(<SubStep01 />),
  builder.onNext(() => ({ subStep: 'step_01_sub_step_02' })),
  builder.onPrevious(
    () => {
      window.location.href = '/';
    }
  )
)();

const setup = R.pipe(
  builder.define('step_01', 'Votre profil'),
  builder.renderWith(<Step01 />),
  builder.withSubSteps([subStep01]),
  builder.onEnter((data) => {
    return {
      data: {
        ...data
      }
    };
  }),
  builder.onNext(() => ({ step: 'step_02', subStep: null }))
)();

export default setup;
