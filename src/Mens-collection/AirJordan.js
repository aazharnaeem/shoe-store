import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {ShoeContext} from '../context/shoeContext'
import Brands from './Brands'

const AirJordan=()=>{
    let {data}=useContext(ShoeContext)

    return(
        <div className="Home-container">
            <Brands />
            <h1>Air Jordan</h1>
        <img  alt=""/>
        <div className="prooo">
    {data.map((proo, ind)=>proo.Category === 'Shoes' && proo.Gender === 'Men' && proo.Brand ==='Air Jordan' ?(
        
        <div  className="pro-con">
                <Link key={ind} className='lnk' to={`/men${proo.id}`}>
            <img src={proo.image} alt=""  title={proo.Name}/>
                </Link>
                <p>{proo.Name} < br /><strong>Rs.{proo.Price}</strong></p>
    </div>
    ): null)}
    </div>
    </div>
        
    )
}

export default AirJordan