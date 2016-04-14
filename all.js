window.onload = function() {

  function Slider() {

    this.width = 1000;
    this.position = 0;
    this.timing = 3000;
    this.slider = document.getElementById('slider');
    this.list = this.slider.querySelector('ul');
    this.listElems = this.slider.querySelectorAll('li');

    this.go = setInterval(this.next.bind(this), this.timing);
    this.slider.querySelector(".next").onclick = this.next.bind(this);
    this.slider.querySelector(".prev").onclick = this.prev.bind(this);
    document.querySelector(".timingGet").onclick = this.setTiming.bind(this);

  }

  Slider.prototype.prev = function() {
    this.position = Math.min(this.position + this.width, 0)
    this.list.style.marginLeft = this.position + 'px';
    this.resetInterval();
  }

  Slider.prototype.next = function() {
    this.position = this.position - this.width;
    this.list.style.marginLeft = this.position + 'px';
    this.resetInterval();
    if (this.position <= -(this.listElems.length*1000-1000)) {
      this.position = 1000;
    }
  }

  Slider.prototype.resetInterval = function() {
    clearInterval(this.go);
    this.go = setInterval(this.next.bind(this), this.timing);
  }

  Slider.prototype.setTiming = function() {
    var timer = document.querySelector(".timingSet");
    if (timer.value < 1 || timer.value > 100){
      return this.timing = 3000;
    }
    return this.timing = timer.value*1000;
  }

  new Slider();

}
