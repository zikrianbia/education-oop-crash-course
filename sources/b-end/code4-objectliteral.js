class Smartphone {
  constructor(cpu, memory, storage) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB');
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

// object literal
const samsulS20 = {
  cpu: 'Ex-nose 990',
  memory: '8 GB',
  storage: '128 GB',
  bisaNyala: function() { },
  bisaDisentuh: function() { },
  swipeLeft: function() { },
  swipeRight: function() { },
  showSpec: function() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`; 
  }
};

console.log(samsulS10);
console.log(siomayPocoF2);
console.log(samsulS20);

console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());
console.log(samsulS20.showSpec());