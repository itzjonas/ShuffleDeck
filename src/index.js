import React from 'react';
import { render } from 'react-dom';

import Shuffle from './Shuffle';

const App = () => (
    <div className="container">
        <Shuffle />
    </div>
);

render(<App />, document.getElementById('root'));
