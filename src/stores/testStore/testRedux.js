import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';

export const testAction = createAction('TEST')

const users = handleActions({
  [testAction](state, { payload: { user } }) {
    return { ...state, [user.test]: user };
  },
}, {});

export default
  users

