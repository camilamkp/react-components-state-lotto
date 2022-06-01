import React, { useState } from 'react';

import './Lotto.scss'


const Lotto = () => {

    const [lottoNumber, setlottoNumber] = useState([])
    const [isEmpty, setisEmpty] = useState(false)
    const emptyArray = new Array(7);

    const resetFct = () =>
    {
        for(let i=0; i<=6; i++)
            {

                emptyArray[i] = setisEmpty(false)
            }
            setlottoNumber(emptyArray)
    }

    const generateFct = () =>
    {
            setisEmpty(true)
            for(let i=0; i<=6; i++)
            {
                const min = 1;
                const max = 49;
                emptyArray[i] = Math.floor(Math.random() * max) + min
                if(i === 6)
                    emptyArray[i] = Math.floor(Math.random() * 10) + 1
            }
           
            setlottoNumber(emptyArray)
    }

    return (
        <div className='container'>
            
            <h1 className='header'>Lotto 6 / 49</h1>
            
            <h3 className='text'>Generating lucky numbers</h3>
            
            <ul className={ isEmpty ? 'numbers' : 'hidden' }>
                {
                    lottoNumber.map((lotto, i ) =>
                    {
                        return <li 
                        key={ i }
                        className='number'>{ lotto }</li>
                    })
                }
            </ul>
            <button 
            className='resetBtn' 
            onClick={ resetFct }
            >Reset</button>
            
            <button 
            className='showMeBtn'
            onClick={ generateFct }
            >Show me lucky numbers</button>

        </div>
    )
}

export default Lotto
