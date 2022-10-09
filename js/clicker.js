
// Represents the clicker component

class Clicker {

  constructor(state) {
    this.state = state;
    document.querySelector('.clicker img').onclick = () => this.waifuClicked();
  }

  waifuClicked() {
    this.state.waifus += 1;
  }
}