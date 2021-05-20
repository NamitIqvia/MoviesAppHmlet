import React from 'react';
//import { Router } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import  App  from './App';
import renderer from 'react-test-renderer';




it('should take a snapshot', () => {
    
    const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});