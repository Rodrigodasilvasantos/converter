import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

describe('List component test', () => {

    it('Must render a component without failure', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<List />, div );
        ReactDOM.unmountComponentAtNode(div);
    });
});