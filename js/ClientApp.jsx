import React from 'react'
import { render } from 'react-dom'

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={ {color: props.color} }>{props.title}</h1>
    </div>
  )
};

const MyFirstComponent = function() {
  return <div id="my-first-component">
    <MyTitle title='Masterpiece Theater' color='YellowGreen' />
    <MyTitle title='Jane the Virgin' color='GreenYellow' />
    <MyTitle title='Pride and Prejudice' color='lime' />
  </div>
};

render(<MyFirstComponent />, document.getElementById('app'));
