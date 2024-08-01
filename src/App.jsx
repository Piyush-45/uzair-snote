import React from 'react'
import Sidebar from './components/Sidebar';
import UseEffect from './components/UseEffect';
import Card from './components/Card';

const App = () => {
  // make a recipe card from it and make use of props
  
  const chocolateCake = {
    title: 'Chocolate Cake',
    ingredients: ['1 cup flour', '1 cup sugar', '1/2 cup cocoa powder', '2 eggs', '1/2 cup milk'],
    instructions: 'Mix all ingredients and bake at 350°F for 30 minutes.'
  };

  const pancake = {
    title: 'Pancake',
    ingredients: ['1 cup flour', '1 cup milk', '1 egg', '2 tbsp sugar', '1 tsp baking powder'],
    instructions: 'Mix all ingredients and cook on a griddle until golden brown.'
  };

  return (
    <div>
    <Card/>
    </div>
  )
}

export default App
