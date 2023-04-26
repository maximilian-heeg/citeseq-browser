import React from 'react';
import './Loading.css'; 
import { Circles } from 'react-loader-spinner'

export default function Loading() {


    return (
        <div class='center'>
            <Circles
                height="80"
                width="80"
                color="#EEC620"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h2>Loading ... </h2>
          </div>
    )
}