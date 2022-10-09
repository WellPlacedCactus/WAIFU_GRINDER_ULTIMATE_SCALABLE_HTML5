
// Represents the display component

class Display {

  constructor(state) {
    this.state = state;
    this.displayTextElement = document.querySelector('.display .text');
    requestAnimationFrame(() => this.updateDisplayLoop());
  }

  updateDisplayLoop() {
    this.displayTextElement.innerHTML = `Waifus: ${this.state.waifus}`;
    requestAnimationFrame(() => this.updateDisplayLoop());
  }
}