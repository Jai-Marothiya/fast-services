import {React, useEffect, useState} from 'react';
import axios from "axios";
import Info from './Info';

const Box = () => {
    const [db, setDb] = useState(null);

    const getProducts = async() => {
        await axios.get ('https://jsonplaceholder.typicode.com/users').then (response => { setDb(response.data) });
    }
    useEffect(() => {
            getProducts();
        },[]);
 
  return (
    db && db.map((data) => (<Info data={data} key={data.id}></Info>))
    // eslint-disable-next-line array-callback-return
  )
}

export default Box;