import React from 'react'
import './RecipePath.css';
export default function RecipePath({recipe}) {
    return (
        recipe["recipe"]['image'].match(/\.(jpeg|jpg|gif|png)$/) != null && 
        (<div className="recipePath">
            <img className='recipePath__img' src={recipe["recipe"]['image']} alt="" />
         < p className='recipePath__name'>{recipe["recipe"]['label']}</p>  
        </div>)
    )
}
