import React from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = [];
    for(let igdt in props.ingredients){
        ingredientSummary.push(
            <li key={igdt}>
                <span style={{textTransform: 'capitalize'}}>{igdt}:</span> {props.ingredients[igdt]}
            </li>
        )
    }
    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>continue to checkout</p>
            <Button btnType='Danger' clicked={props.purchaseCancled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrapper>
    );
};

export default OrderSummary;