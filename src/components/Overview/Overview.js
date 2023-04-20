import {useParams, useState} from 'react';
import "./Overview.scss";

export default function Overview(){
    return(
        <main>
        <h1>{title}</h1>
        <div>
            <div>
            <div>{year}</div>
            <div>{rating}</div>
            <div>{length}</div>
            </div>
            <div>{picture}</div>
        </div>
        </main>
    )
};