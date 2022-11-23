import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import notes from './data/notes'

ReactDOM.render(<App notes={notes} />, document.getElementById('root'))