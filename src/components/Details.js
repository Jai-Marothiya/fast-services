import React from 'react';

const Details = ({data,status}) => {

  return (
    <div className="details status">
      <div>
         <h4>Description</h4>
         <p>{data.company.catchPhrase}, {data.company.bs}</p>
      </div>
      <div className="desc">
        <ul>
          <li>
            <h4>Contact Person</h4>
            <p>{data.name}</p>
          </li>
          <li>
            <h4>Email</h4>
            <p>{data.email}</p>
          </li>
          <li>
            <h4>Phone</h4>
            <p>{data.phone}</p>
          </li>
          <li>
            <h4>Website</h4>
            <p>{data.website}</p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>Address</h4>
            <p>{data.address.street}, {data.address.city}, {data.address.zipcode}</p>
          </li>
          <li>
            <h4>City</h4>
            <p>{data.address.city}</p>
          </li>
          <li>
            <h4>Zipcode</h4>
            <p>{data.address.zipcode}</p>
          </li>
          <li>
            <h4>Suite</h4>
            <p>{data.address.suite}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Details;