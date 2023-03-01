import React from 'react'
import './PostRec.css'

const PostRec = ({pst}) => {
    const id = pst.id
    const code = <strong>{pst.code}</strong>
    // const kind = pst.kind
    let fn = pst.fn
    let ln = pst.ln
    let country = pst.country
    let city = pst.city

    // const kind = pst.kind
    fn = !fn || (fn && (fn).startsWith('UNKNOWN')) ? 
        <p className='fn'>u_fn</p> : <p className='fn'>{fn}</p>
    ln = !ln || (ln && (ln).startsWith('UNKNOWN')) ? 
        <p className='ln'>u_ln</p> : <p className='ln'>{ln}</p>
    country = !country || (country && (country).startsWith('UNKNOWN')) ? 
        <p className='country'>u_country</p> : <p className='country'>{country}</p>
    city = !city || (city && (city).startsWith('UNKNOWN')) ? 
    <p className='city'>u_city</p> : <p className='city'>{city}</p>

    return (
        <div >
            {id}{'. '}{code}{', '}{fn}{', '}{ln}{', '}{country}{', '}{city}
        </div>
    )
}
export default PostRec