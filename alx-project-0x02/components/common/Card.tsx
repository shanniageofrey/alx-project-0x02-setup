import { CardProps } from '@/interfaces';
import React from 'react';

export default function Card({title,content}:CardProps){
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}