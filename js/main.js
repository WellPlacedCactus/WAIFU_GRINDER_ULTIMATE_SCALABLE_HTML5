
// Assemble all components in a scope wrapper

addEventListener('load', () => {

  const state = {
    waifus: 0
  };

  new Clicker(state);
  new Display(state);
  new Shop(state);
});