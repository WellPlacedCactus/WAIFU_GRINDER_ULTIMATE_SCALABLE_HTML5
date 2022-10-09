
// Represents the shop component

class Shop {

  constructor(state) {
    this.state = state;
    this.urlString = '3284.jpg,68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f3131497a3539565a36316152513d3d2d3736363537393430332e3.jpg,799cb963d7c0fc1b1fd2fb5ab06cf60c.jpg,E8rHX67XIAMoowO.jpg_large,E8rHYKOXIAgpiSt.jpg,EtQbGfQWQAIqXUN.jpg_large,Sexy-Waifu-Anime-Atago-Azur-Lane-Cute-Sexy-Girl-Colorful-Car-Stickers-Bumper-Window-Laptop-Motorcycauto.jpg_Q90.jpg_.jpg,images.jpg,main-qimg-9edbd8964808b1e888d1a94fbdcd3a7b-lq.jpg';
    this.shop = document.querySelector('.shop');
    this.button = document.querySelector('.shop .toggle-button');
    this.catalog = document.querySelector('.catalog');
    this.button.addEventListener('click', () => this.toggleShop());
    this.generateShopItems();
  }

  toggleShop() {
    if (this.shop.classList.contains('off')) {
      this.shop.classList.remove('off');
      this.button.innerHTML = 'Close Shop <<<';
    } else {
      this.shop.classList.add('off');
      this.button.innerHTML = 'Open Shop >>>';
    }
  }

  generateShopItem(src) {
    return `<div class="item"><img src="${src}" alt=":(" draggable="false"></div>`;
  }

  generateShopItems() {
    for (const string of this.urlString.split(',')) {
      this.catalog.innerHTML += this.generateShopItem('./assets/' + string);
    }
  }
}