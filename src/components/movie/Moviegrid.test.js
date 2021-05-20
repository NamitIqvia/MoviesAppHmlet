import React from 'react';
//import { Router } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import  Moviegrid  from './Moviegrid';
import renderer from 'react-test-renderer';




it('should take a snapshot', () => {
    const data ={title:"Test Movie", vote_average:0}
    const tree = renderer.create(<BrowserRouter><Moviegrid data={data} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});