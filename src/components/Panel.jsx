import React, { useState, useEffect, useContext } from 'react';
import './Panel.scss';
import { Context } from './Context';

export default function Panel(props) {
    const { cityList, setShowCity } = useContext(Context);
    // const [arr, setArr] = useState([]);

    // useState(() => {
    //     console.log('panel update')
    // }, [cityList])

    return (
        <aside>
            <div className='citySection'>
                <h3>City</h3>
                <hr />
                {cityList.map((obj) => {
                    return <button key={obj.id} onClick={()=>setShowCity(obj.city)}>{obj.city}</button>
                })}
                {/* <button onClick={() => addCity(city.name)}>+</button> */}
            </div>
            <div className='periodSection'>
                <h3>Period</h3>
                <hr />
                <button>Current</button>


            </div>
        </aside>
    )
}