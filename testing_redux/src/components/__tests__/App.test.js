import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

describe('<App/>', () => {
  const mockSetWhoIAm = jest.fn();

  beforeEach(() => {
    mockSetWhoIAm.mockClear();
  });

  test('should match the snapshot', () => {
    const app = shallow(<App whoAmI="Thanos" setWhoIAm={mockSetWhoIAm} />);
    expect(app.html()).toMatchSnapshot();
  });

  test('should call setWhoIAm on click', () => {
    const app = shallow(<App whoAmI="Thanos" setWhoIAm={mockSetWhoIAm} />);
    expect(mockSetWhoIAm).toHaveBeenCalledTimes(0);
    app.find('button').simulate('click');
    expect(mockSetWhoIAm).toHaveBeenCalledTimes(1);
  });
});
