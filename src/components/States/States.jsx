import React from 'react';
import './States.css';
export const States = ({ currentState, onSelect }) => {
  const states = [
    { id: 1, name: 'Abia', value: 'Abia', placeholder: 'Abia' },
    { id: 2, name: 'Adamawa', value: 'Adamawa', placeholder: 'Adamawa' },
    {
      id: 3,
      name: 'AkwaIbom',
      value: 'AkwaIbom',
      placeholder: 'Akwa Ibom',
    },
    { id: 4, name: 'Anambra', value: 'Anambra', placeholder: 'Anambra' },
    { id: 5, name: 'Bauchi', value: 'Bauchi', placeholder: 'Bauchi' },
    { id: 6, name: 'Bayelsa', value: 'Bayelsa', placeholder: 'Bayelsa' },
    { id: 7, name: 'Benue', value: 'Benue', placeholder: 'Benue' },
    { id: 8, name: 'Borno', value: 'Borno', placeholder: 'Borno' },
    {
      id: 9,
      name: 'CrossRiver',
      value: 'CrossRiver',
      placeholder: 'Cross River',
    },
    { id: 10, name: 'Delta', value: 'Delta', placeholder: 'Delta' },
    { id: 11, name: 'Ebonyi', value: 'Ebonyi', placeholder: 'Ebonyi' },
    { id: 12, name: 'Edo', value: 'Edo', placeholder: 'Edo' },
    { id: 13, name: 'Ekiti', value: 'Ekiti', placeholder: 'Ekiti' },
    { id: 14, name: 'Enugu', value: 'Enugu', placeholder: 'Enugu' },
    { id: 15, name: 'Gombe', value: 'Gombe', placeholder: 'Gombe' },
    { id: 16, name: 'Imo', value: 'Imo', placeholder: 'Imo' },
    { id: 17, name: 'Jigawa', value: 'Jigawa', placeholder: 'Jigawa' },
    { id: 18, name: 'Kaduna', value: 'Kaduna', placeholder: 'Kaduna' },
    { id: 19, name: 'Kano', value: 'Kano', placeholder: 'Kano' },
    { id: 20, name: 'Katsina', value: 'Katsina', placeholder: 'Katsina' },
    { id: 21, name: 'Kebbi', value: 'Kebbi', placeholder: 'Kebbi' },
    { id: 22, name: 'Kogi', value: 'Kogi', placeholder: 'Kogi' },
    { id: 23, name: 'Kwara', value: 'Kwara', placeholder: 'Kwara' },
    { id: 24, name: 'Lagos', value: 'Lagos', placeholder: 'Lagos' },
    {
      id: 25,
      name: 'Nasarawa',
      value: 'Nasarawa',
      placeholder: 'Nasarawa',
    },
    { id: 26, name: 'Niger', value: 'Niger', placeholder: 'Niger' },
    { id: 27, name: 'Ogun', value: 'Ogun', placeholder: 'Ogun' },
    { id: 28, name: 'Ondo', value: 'Ondo', placeholder: 'Ondo' },
    { id: 29, name: 'Osun', value: 'Osun', placeholder: 'Osun' },
    { id: 30, name: 'Oyo', value: 'Oyo', placeholder: 'Oyo' },
    { id: 31, name: 'Plateau', value: 'Plateau', placeholder: 'Plateau' },
    { id: 32, name: 'Rivers', value: 'Rivers', placeholder: 'Rivers' },
    { id: 33, name: 'Sokoto', value: 'Sokoto', placeholder: 'Sokoto' },
    { id: 34, name: 'Taraba', value: 'Taraba', placeholder: 'Taraba' },
    { id: 35, name: 'Yobe', value: 'Yobe', placeholder: 'Yobe' },
    { id: 36, name: 'Zamfara', value: 'Zamfara', placeholder: 'Zamfara' },
    { id: 37, name: 'Abuja', value: 'Abuja', placeholder: 'Abuja' },
  ];

  const stateOpt = states.map((state) => (
    <option key={state.id} value={state.value} className='option-tag'>
      {state.placeholder}
    </option>
  ));

  return (
    <select
      name='state'
      defaultValue={currentState}
      onChange={(e) => onSelect(e.target.value)}
      value={currentState}
      className='state-tag'
    >
      {stateOpt}
    </select>
  );
};

// export const States = () => {
//   return (
//     <div>
//       <p>LOcation</p>
//     </div>
//   );
// };
