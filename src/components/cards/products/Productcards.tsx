import React from 'react';
import { FC } from 'react';
import { Womenslist } from '../../../list/Womenslist';
import './Productscard.css';
interface Iproductcard {
    list: {
        image: string;
        title: string;
        price: string;
    }[]
}
const Productcards: FC<Iproductcard> = ({ list }) => {
    return < div id="wrap" >
        <div id="columns" className="columns_4">

            {
                list.map(({ image, price, title }) => {
                    return <figure>
                        <img src={image} />
                        <figcaption>{title}</figcaption>
                        <span className="price">${price}</span>
                        <a className="button" href="#">Book Now</a>
                    </figure>
                })
            }
        </div>
    </div >
}
export default Productcards
