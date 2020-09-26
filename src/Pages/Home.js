import React from 'react'
// import {data} from '../data/data'
import '../App.css'
// import { ShoeContext } from '../context/shoeContext'
import COver from '../images/Home-Cover.png'
import NewsLetter from '../Pages/NewsLetter'
import Info from '../Pages/SiteInfo'
const Home =()=>{

    // const {data} = useContext(ShoeContext)
    return(
        <div>
            <img src={COver} alt="" style={{maxWidth:"100%", minWidth:"100%",}} />

            <div>
                <h2>New In</h2>
                {/* <div >
                {data.map((val, key)=>{
                    return(
                        <div key={key} className="pro-con">
                            <img src={nike} alt="" width="150px" />
                            {val.Name}
                        </div>
                    )
                })}
                </div> */}
                </div>
                {/* <div id="Addidas">
                    <h2>Addidas</h2>
                    <div className="prooo">
                {data.map((val, key)=>{
                    return(
                        <div key={key} className="pro-con">
                            <img src={nike} alt="" width="150px" />
                            {val.Name}
                        </div>
                    )
                })}
                </div>
                </div>
                
                
                
                <div id="Rosh-one">
                    <h2>Roshe one</h2>
                    <div className="prooo">
                {data.map((val, key)=>{
                    return(
                        <div key={key} className="pro-con">
                            <img src={nike} alt="" width="150px" />
                            {val.Name}
                        </div>
                    )
                })}
                </div>
                </div>
                
                
                
                <div id="Gucci">
                    <h2>Gucci</h2>
                    <div className="prooo">
                {data.map((val, key)=>{
                    return(
                        <div key={key} className="pro-con">
                            <img src={nike} alt="" width="150px" />
                            {val.Name}
                        </div>
                    )
                })}
                </div>
                </div>
                
                
                
                <div id="Slippers">
                    <h2>Slippers</h2>
                    <div className="prooo">
                {data.map((val, key)=>{
                    return(
                        <div key={key} className="pro-con">
                            <img src={nike} alt="" width="150px" />
                            {val.Name}
                        </div>
                    )
                })}
                </div>
                </div> */}
                <NewsLetter />
                <br />
                <hr />
                <Info />

        </div>
        )
}
export default Home