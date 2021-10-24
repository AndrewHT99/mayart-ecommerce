import React from 'react';
import Btn from './atoms/Btn';
import P from './atoms/P';
import H1 from './atoms/H1';
import H2 from './atoms/H2';
import H3 from './atoms/H3';
import H4 from './atoms/H4';

const Product = () => {
    return (
        <div id="product-card">
            <Btn handleClick={()=>alert("Holo")} text="Try me"/>
            <P text="Soy un párrafo de prueba ché"/>
            <H1 text="Soy un h1 ché"/>
            <H2 text="Soy un h2 ché"/>
            <H3 text="Soy un h3 ché"/>
            <H4 text="Soy un h4 ché"/>
        </div>
    )
}

export default Product
