import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {ShoeContext} from '../context/shoeContext'
import Brands from '../Mens-collection/Brands'
const Men =()=>{
    let {data}=useContext(ShoeContext)

    return(
        <div className="Home-container">
            <Brands />
        <h1 style={{textAlign:'center'}}><u>Men's collection</u></h1>
        <div className="prooo">
    {data.map((proo, ind)=>proo.Category === 'Shoes' && proo.Gender === 'Men' ?(
        
        <div  className="pro-con">
                <Link key={ind} className='lnk' to={`/men${proo.id}`}>
            <img src={proo.image} alt=""  title={proo.Name}  width='200px' height='200px'/>
                </Link>
                <p>{proo.Name} < br /><strong>Rs.{proo.Price}</strong></p>
    </div>
    ): null)}
    </div>
    </div>
    )
}
export default Men