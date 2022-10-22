# React Custom Countdown/ Launch Timer 
A customizable countdown component for React, that can be used as a launch timer or as a countdown timer.

## Getting Started
You can install the module via `npm` or `yarn`
 
`npm i react-custom-count-down-timer`
 
 or

 `yarn add react-custom-count-down-timer` 

## Basic Usage
Import the `ReactCountDownTimer` component from `react-custom-count-down-timer` in file where the count down needs to be used. Just pass in a `targetDateTimeVal` and you'll be able use this. Since this is a count down timer the `targetDaeTimeVal` should hold a future date.

### Example
```JavaScript
import React from 'react';
import ReactCountDownTimer from 'react-custom-count-down-timer';

export default function App(){

return (
    <ReactCountDownTimer targetDateTimeVal={'May 10, 2021 00:00:00'} />
 );
}
```

## Custom Properties

| Option                              | Description                                                                                                      | Default       | Type   |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------|--------|
| rootColor                           | Using this the a common color can be set to `headerText`, `descMessage` and `timers`                             | #38393a       | string |            
| headerText                          | Using this prop custom header title can be set                                                                   |    -          | string |
| headerTextFontSize                  | The `headerText` fontSize can be adjusted using this prop                                                        |  '3em'        | string |
| headerTextColor                     | Can be used to set the color of `headerText`                                                                     | #38393a       | string |
| descMessage                         | Using this prop description message can be added                                                                 |    -          | string |
| descMsgColor                        | Can be used to set the color of `descMessage`                                                                    | #38393a       | string |
| descTextFontSize                    | The `headerText` fontSize can be adjusted using this prop                                                        |  '0.5em'      | string |
| icon                                | Image can be displayed below the counter. The image needs to be stored in the public folder and pass the image   |    -          | string |
| iconWidth & iconHeight              | Specify the image widht and height using these props                                                             |'500px & 'auto'| string | 

### Example 

```JavaScript 
<ReactCountDownTimer
  targetDateTimeVal={'May 10, 2021 00:00:00'}
  headerText={'Front End Web Developer Program'}
  headerTextFontSize={'32px'}
  headerTextFontWeight={900}
  descMsgColor={'#d55617'}
  descMessage={
    'The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. '
  }
  descTextFontSize={'16px'}
  icon={'calendarIcon.jpg'}
  iconWidth={'700px'}
/>

```
You can customize the counter by wrrapping in your own custom component and even can pass your custom components to `ReactCountDownTimer` as `{props.children}`.

## License

[MIT License](LICENSE)

