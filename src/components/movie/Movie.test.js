import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import  Movie  from './Movie';

/*it("search bar renders correctly", () => {
    const {queryByTestId} = render(<Movie />)
    expect(queryByTestId("search bar")).toBeTruthy()
})*/

afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment } = render(<Movie />)
    expect(asFragment(<Movie />)).toMatchSnapshot()
});