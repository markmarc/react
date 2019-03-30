import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, mounth) => {
if(mounth > 2 && mounth < 9 ) {
return    lat > 0 ? 'summer' : 'winter'
} else {
    return lat > 0 ? 'winter' : 'summer'
}
}


const seasonConfig = {
    summe: {
        text: 'Lecimy na plaze',
        iconName:'sun' 

    }, 
    winter: {
        text: 'Brr. Zimno',
        iconName: 'snowflake'
    }
    }
}
const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth())
   const {text, iconName} = seasonConfig[season]
    return(
        <div className={'season-display ${season'}>
            <i className={'icon-left massive`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    )
            
        
}


export default SeasonDisplay