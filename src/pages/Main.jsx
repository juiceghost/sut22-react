import React, { useState } from 'React';

import RegistrationItem from '../components/RegistrationItem';

function Main() {
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [hours, setHours] = useState("0");

    const [registrations, setRegistrations] = useState([]);

    const handleSubmit = (event) => {
        //console.log("Hej från handleSubmit")
        const newRegistration = {
            email: email,
            project: project,
            hours: hours
        };

        setRegistrations([...registrations, newRegistration])
        event.preventDefault();
    };

    const handleEmail = (evt) => {
        setEmail(evt.target.value);
    }
    const handleProject = (evt) => {
        setProject(evt.target.value);
    }
    const handleHours = (evt) => {
        setHours(evt.target.value);
    }

    return (
        <>
            <h1>Time registrator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" onChange={handleEmail} value={email} />
                </div>
                <div>
                    <label htmlFor="project">Project</label>
                    <input id="project" type="text" onChange={handleProject} value={project} />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input id="hours" type="text" onChange={handleHours} value={hours} />
                </div>
                <button>Submit</button>
            </form>
            {registrations.map(registration => (<RegistrationItem email={registration.email} project={registration.project} hours={registration.hours} />))}
        </>
    );
}

export default Main;