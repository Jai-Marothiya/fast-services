import {React, useEffect, useState} from 'react';
import axios from "axios";
import Info from './Info';

const Box = ({x}) => {
    const [db, setDb] = useState(null);
    

    const getProducts = async() => {
        await axios.get ('https://jsonplaceholder.typicode.com/users').then (response => { setDb(response.data) });
    }
    useEffect(() => {
            getProducts();
        },[]);
    
  return (
    // eslint-disable-next-line array-callback-return
      db && db.filter(data => data.id >= (3*(x-1)+1) && data.id<=(3*(x-1)+3)).map(fData => (
        <Info data={fData} key={fData.id}></Info>
      ))
    )
}

export default Box;