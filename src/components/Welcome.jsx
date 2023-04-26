import React from 'react';
import './Welcome.css'; 


export default function Welcome({ children }) {
    const [visible, setVisible] = React.useState(false);

    return (
        <div>
        {visible ? ( <div className='modal'>           
            <div className="main">
            <div> I hereby confirm that browsing this data does not prevent me from writing a grant.</div>
           
            <button onClick={() => setVisible(!visible)}>Confirm</button>
            </div>
            
          </div>
        ) : (
            <div>
                { children }
            </div>

        )}
        </div>
    )
}