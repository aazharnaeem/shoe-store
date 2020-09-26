import React,{useContext} from 'react'
import { useParams } from "react-router-dom";
import {ShoeContext} from '../context/shoeContext'
// import nike from '../images/shoe1.jpg'


const Details =()=>{
    let {data} = useContext(ShoeContext)
    let {id} = useParams()
    const shoe = data[id -1]
    // console.log(shoe)
    return(
        <>
        <img src={shoe.image} alt=""  width="250"/>
        <br />
        {shoe.Name} <br />
        {shoe.Price}
        </>
    )
}

export default Details