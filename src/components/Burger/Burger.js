import React from 'react'
import classes from './Burger.module.sass'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let ingredientsList = [];
    for (const [ingdt, count] of Object.entries( props.ingredients )) {
        for(var i=0; i<count; i++){
            ingredientsList.push(<BurgerIngredient key={ingdt + i} type={ingdt} />);
        }
    }
    if (ingredientsList.length === 0) {
        ingredientsList = (<p>Please start adding ingredients!</p>)
    }
    console.log(ingredientsList);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredientsList}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;