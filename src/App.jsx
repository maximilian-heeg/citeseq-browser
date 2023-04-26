import React, { Suspense } from 'react';
const Vitessce = React.lazy(() => import('./components/VitessceWrapper'));
import Logo from './components/Logo'
import Loading from "./components/Loading"
import Welcome from './components/Welcome';
import SelectDataset from './components/SelectDataSet'

import './App.css'

export default function App() {
    const [config, setConfig] = React.useState(false);

    return (
      <div>
        <Welcome>
        <div className='fullheight'>
            <div className="logoContainer">
                <Logo />
                {config ? (
                    <div className="goback">
                        <button onClick={() => { if (window.confirm('Are you sure you want to select another dataset?\nThis will delete all gatings is your current session.')) setConfig(false) } }>Select another dataset</button>
                    </div>
                ) : null}
            </div>
            <div className='mainContainer'>
            {config ? 
            ( 
                <Suspense fallback={
                        <Loading/>
                    }>
                
                    <Vitessce
                        config={config}
                        height='auto'
                        theme="light"
                    />
                    </Suspense>
            ) : (
                    <SelectDataset setConfig={(x) => setConfig(x)} />

            )}
            </div>
        </div>
        </Welcome>       
        </div>
    );
}

