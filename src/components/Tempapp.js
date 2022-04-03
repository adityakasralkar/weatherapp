import React,{useEffect, useState} from "react";
import "./css/style.css";


const Tempapp = () => {
    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=matrics &appid=7b8b8bceec6765cd849a748859a91f20`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        
        fetchApi();
    },[search] )

    return(
        <>
        <div className="box">
            <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputfield"
                    onChange= { (event) =>{
                            setSearch(event.target.value)
                    }} />

            </div>
    {!city ? (
        <p className="errorMsg"> No Data Found</p>
    ) :(
            <div>
            <div className="info">
                        <h4 className="location">
                        <i className="fa-solid fa-street-view"></i>{search}
                        </h4>

                        <h1 className="temp">
                            {city.temp}
                        </h1>
                        <h3 className="tempmin_max"> Min : {city.temp_min} Cel  ||  Max : {city.temp_max} Cel</h3>

                    </div>
                    
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
            </div>
        )

    }    
        

       

        </div>
        </>
    )
}

export default Tempapp;