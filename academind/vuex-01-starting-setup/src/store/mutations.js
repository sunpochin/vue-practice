export default {
  setAuth(state, payload) {
    console.log('payload: ', payload);
    state.loggedIn = payload.isAuth;
  },
};
