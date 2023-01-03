/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

describe('App principal screen', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Press 'Validate Text' button when i add wrong text", async () => {
    const {getByText, getByDisplayValue} = render(<App />);
    const input = getByDisplayValue('');
    const fireEventButtonValidateText = getByText('Validate Text');
    fireEvent.changeText(input, '(texto de prueba');
    fireEvent.press(fireEventButtonValidateText);
    await waitFor(() =>
      expect(
        getByText(
          'Los parentesis, corchetes, etc. en el STRING NO estan equilibrados',
        ),
      ).toBeTruthy(),
    );
  });

  it("Press 'Validate Text' button when i add correct text", async () => {
    const {getByText, getByDisplayValue} = render(<App />);
    const input = getByDisplayValue('');
    const fireEventButtonValidateText = getByText('Validate Text');
    fireEvent.changeText(input, '(texto de prueba)');
    fireEvent.press(fireEventButtonValidateText);
    await waitFor(() =>
      expect(
        getByText(
          'Los parentesis, corchetes, etc. en el STRING estan equilibrados',
        ),
      ).toBeTruthy(),
    );
  });
});
