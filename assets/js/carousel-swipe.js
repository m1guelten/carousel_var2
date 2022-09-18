function SwipeCarousel() {
  Carousel.apply(this, arguments);
}
SwipeCarousel.prototype = Object.create(Carousel.prototype);
SwipeCarousel.prototype.constructor = SwipeCarousel;
SwipeCarousel.prototype._swipeStart = function (event) {
  this.swipeStartX = event.changedTouches[0].pageX;
};
SwipeCarousel.prototype._swipeEnd = function (event) {
  this.swipeEndX = event.changedTouches[0].pageX;
  if (this.swipeEndX - this.swipeStartX < -100) this._prev();
  if (this.swipeEndX - this.swipeStartX > 100) this._next();
};
SwipeCarousel.prototype._initListeners = function () {
  Carousel.prototype._initListeners.apply(this);
  this.container.addEventListener('touchstart', this._swipeStart.bind(this));
  this.container.addEventListener('touchend', this._swipeEnd.bind(this));
};
