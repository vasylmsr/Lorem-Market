class Carousel {
  constructor(domElement) {
    this.carousel = domElement.querySelector('.carousel');
    this.carouselSlidesElement = this.carousel.querySelector('.carousel__slides');
    this.slidesCount = this.carouselSlidesElement.childElementCount;
    this.leftButton = this.carousel.querySelector('.carousel-arrow_left');
    this.rightButton = this.carousel.querySelector('.carousel-arrow_right');

    this.leftButton.onclick = () => this.moveLeft();
    this.rightButton.onclick = () => this.moveRight();
  }

  get carouselMargin() {
    return parseInt(this.carouselSlidesElement.style.marginLeft) || 0;
  }

  move(margin) {
    this.carouselSlidesElement.style.marginLeft = this.carouselMargin + margin + "%";
  }

  moveLeft() {
    if(this.carouselMargin === 0) {
      return false;
    }
    return this.move(100);
  }

  moveRight() {
    if(this.carouselMargin === (this.slidesCount - 1) * (-100)) {
      return false;
    }
    return this.move(-100);
  }
}