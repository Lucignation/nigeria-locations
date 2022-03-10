import { React, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { States } from '../components/States';

const stories = storiesOf('State Test', module);

stories.add('State', () => {
  const onChange = (moun) => {
    console.log(`I am clicked ${moun}`);
  };
  return (
    <>
      <p>Hello</p>
      <States onSelect={onChange} />
    </>
  );
});
