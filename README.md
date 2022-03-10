# Locations in Ngeria

<div align="center">
<img width="436" heigth="398" src="https://res.cloudinary.com/lucignation/image/upload/v1646863640/samples/Screen_Shot_2022-03-09_at_11.06.06_PM_cmshiy.png">
  <img width="436" heigth="398" src="https://res.cloudinary.com/lucignation/image/upload/v1646863641/samples/Screen_Shot_2022-03-09_at_11.06.44_PM_g7rvgn.png">
</div>

This package can easily be used with react project within form tag to get all locations in Nigeria.

## All the 36 States and FCT

In the project directory, you can run:

- Easy to add into existing project
- Easy to style
- Get selected location on one click

## How to use

- Install by executing `npm install nigeria-locations` or `yarn add nigeria-locations`.
- Import by adding `import States from 'nigeria-locations'`.
- Use by adding `<States />`. Use `onSelect` prop for getting new values.

### Installation

Add nigeria-locations to your project by executing `npm install nigeria-locations` or `yarn add nigeria-locations`.

### Usage

Here's an example of basic usage:

```js
import React, { useState } from 'react';
import States from 'nigeria-locations';

function MyApp() {
  const onChange = (state) => {
    console.log(state);
  };

  return (
    <div>
      <States onSelect={onChange} />
    </div>
  );
}
```

## User guide

### nigeria-locations

Displays a complete, interactive select tag.

#### Styling

| Prop name  | Description                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| select-tag | Use this className to override the initial styling of the select tag                                                                                                                 |
| option-tag | Use this className to override the initial styling of the tag tag                                                                                                                    |
| onSelect   | Create a function and pass the function as a prop to <States /> tag                                                                                                                  |
| params     | In the function created, pass a param in the function. Inside the function, you can get the value of the selected state, console the param in the function to see the selected state |
