import {React,useState} from 'react';
import Details from './Details';

const Info = ({data}) => {
   const [status,setStatus] = useState(true);
   const handleClick=(e)=>{
        if(status===true){
             setStatus(false);
             e.target.innerHTML = "Hide Details";
        }else{
            setStatus(true);
            e.target.innerHTML = "View Details";
        }

        e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('status');
   } 

  return (
    <div>
        <div className="short">
            <ul >
                <li>{data.company.name}</li>
                <li>
                    <h4>Contact</h4>
                    <span>{data.name}</span>
                </li>
                <li>
                    <h4>City</h4>
                    <span>{data.address.city}</span>
                </li>
                <li>
                    <h4>Phones</h4>
                    <span>{data.phone}</span>
                </li>
                <li>
                    <button onClick={handleClick}>View details</button>
                </li>
            </ul>
        </div>
        
        <Details data={data} status={status}></Details>
    </div>
  )
}

export default Info;