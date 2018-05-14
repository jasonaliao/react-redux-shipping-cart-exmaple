import React from 'react';
import Enzyme from 'enzyme';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import Adapter from 'enzyme-adapter-react-16';
import ProductLst from './index';

import { createMockStore } from 'redux-test-utils';

Enzyme.configure({ adapter: new Adapter() });

test('ProductList component should play with redux', () => {
    const ReactComponent = () => (<ProductLst />);
    
    // mapStateToProps
    describe('state', () => {
        it('works', () => {
            const expectedState = 'expectedState';
            const mapStateToProps = (state) => ({
                state,
            });

            const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
            const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
            expect(component.props().state).toBe(expectedState);
        });
    });

    // mapDispatchToProps
    describe('dispatch', () => {
        it('works', () => {
          const action = {
            type: 'type',
          };
          const mapDispatchToProps = (dispatch) => ({
            dispatchProp() {
              dispatch(action);
            },
          });
          const store = createMockStore();
     
          const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
          const component = shallowWithStore(<ConnectedComponent />, store);
          component.props().dispatchProp();
          expect(store.isActionDispatched(action)).toBe(true);
        });
      });

});

