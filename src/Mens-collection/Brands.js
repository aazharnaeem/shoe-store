import React from 'react'
import {useHistory} from 'react-router-dom'

const Brands = ()=>{
    let history =useHistory();

    function handleChange(value) {
        history.push(`/${value}`);
      }
    

    return(
        <div>
            Collection:<select onChange={event => handleChange(event.target.value)}>
                            <option>Brands</option>
                            <option>Addidas</option>
                            <option>Nike</option>
                            <option>Air Jordan</option>
                            <option>Vans</option>
                            <option>New Balance</option>
                            <option>Gucci</option>
                            <option>Casual</option>
                            <option>Super Max</option>
                            <option>Sky</option>
                            <option>Balenciaga</option>
                        </select>
        </div>
    )
}

export default Brands