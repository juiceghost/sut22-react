import React from 'react';

function RegistrationItem({ email, hours, project }) {
    // const { email, hours, project } = props; props used to be the argument given to this component
    return (
        <div>
            <span>{email} has worked {hours} hours on {project}</span>
        </div>
    )
}

export default RegistrationItem;