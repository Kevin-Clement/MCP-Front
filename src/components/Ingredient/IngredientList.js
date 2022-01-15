import React from 'react';
import {Link} from 'react-router-dom';

const IngredientList = ({ingredients}) => {

    return (
        <ul>
            { 
                ingredients.map( (i) =>{
                    return (<li key={i.id}>
                            <Link 
                            to='/ingredient/:id'
                            state={i}
                            >
                                {i.ING_name}
                            </Link>
                        </li>)
                })
            }
        </ul>
    );
};

export default IngredientList;