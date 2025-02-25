import React from 'react'

const CreatedAt = (created: any) => {
    const now = Date.now(); 
    const ageInMilliseconds = now - created;

    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);

    if (ageInSeconds < 60) {
        return <div className="lowercase">{ageInSeconds}s</div>; // Show in seconds
    } else if (ageInMinutes < 60) {
        return <div className="lowercase">{ageInMinutes}m</div>; // Show in minutes
    } else if (ageInHours < 24) {
        return <div className="lowercase">{ageInHours}h</div>; // Show in hours
    } else {
        return <div className="lowercase">{ageInDays}d</div>; // Show in days
    }
}

export default CreatedAt