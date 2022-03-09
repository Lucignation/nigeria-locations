import { React, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { States } from '../components/States';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [state, setState] = useState('');
  return <States isState={state} />;
});
