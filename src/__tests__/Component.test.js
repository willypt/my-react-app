// These are the test library dependencies
import React from 'react';
import {shallow} from 'enzyme';
import 'jest-enzyme';

// We use these imports to pass down mock store to our component
import store from '../store';
import MockProvider from 'redux-mock-provider';

// These are the components we want to test
import App from '../App';
import ConnectedPerson, {Person} from '../components/Person';
import {updateBio} from '../actions/personAction'

// ========================================================

// Extensive EXPECT JEST LISTS can be found here
// http://facebook.github.io/jest/docs/expect.html

// ========================================================

// A simple test
describe('Our App', () => {
  it('can calculate simple addition of 2+2 equals to 4', () => {
    expect(2 + 2).toBe(4)
  })
});

// We can do shallow testing (Only renders <App /> without rendering Child Component)
describe('App Component', () => {
  it('can be rendered without exploding', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1)
  });
});


// We are testing Person Component as "Disconnected" so that we don't need to deal with `store`
// Need to pass all props.
// Only to test how a component renders when passed with defined props
describe('Disconnected Person Component', () => {
  const TEST_BIO = 'test bio';
  const TEST_NAME = 'Willy';
  const TEST_AGE = '25';
  const TEST_ADDRESS = 'Jakarta';
  const TEST_PERSON = {
    bio: TEST_BIO
  }
  const updateBioMock = jest.fn();

  it('can renders correctly with supplied state and props', () => {
    const wrapper = shallow(<Person name={TEST_NAME} age={TEST_AGE} address={TEST_ADDRESS} person={TEST_PERSON} 
      updateBio={updateBioMock} />);
    expect(wrapper.text()).toContain(TEST_NAME);
    expect(wrapper.text()).toContain(TEST_AGE);
    expect(wrapper.text()).toContain(TEST_ADDRESS);
    expect(wrapper.text()).toContain(TEST_BIO);
    expect(wrapper.find('button')).toHaveLength(2);
    wrapper.find('button').first().simulate('click');
    expect(updateBioMock.mock.calls.length).toBe(1);
  });
});

// We test the "Connected" Person to verify that indeed the store is called and set the right value 
describe('Connected Person Component', () => {
  const TEST_CONNECTED_BIO = 'test connected bio';
  const TEST_BIO = 'test bio';
  const TEST_NAME = 'Willy';
  const TEST_AGE = '25';
  const TEST_ADDRESS = 'Jakarta';

  // Even though we pass the TEST_PERSON prop, it should be replaced by the time `updateBio` dispatched
  const TEST_PERSON = {
    bio: TEST_BIO
  }

  it('can renders correctly and emit change via dispatch', () => {
    const wrapper = shallow(
      <MockProvider store={store}>
        <ConnectedPerson name={TEST_NAME} age={TEST_AGE} address={TEST_ADDRESS} person={TEST_PERSON} />
      </MockProvider>);
    store.dispatch(updateBio(TEST_CONNECTED_BIO));
    expect(wrapper.html()).toContain(TEST_CONNECTED_BIO);
    expect(wrapper.html()).not.toContain(TEST_BIO);
  });
});