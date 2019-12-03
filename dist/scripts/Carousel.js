class Carousel {
  constructor(carousel) {
    this.carousel = carousel.querySelector('.carousel');
    this.carouselSlides = this.carousel.querySelector('.carousel__slides');
    this.slidesCount = this.carouselSlides.childElementCount;
    this.leftButton = this.carousel.querySelector('.carousel-arrow_left');
    this.rightButton = this.carousel.querySelector('.carousel-arrow_right');

    this.leftButton.onclick = () => this.moveLeft();
    this.rightButton.onclick = () => this.moveRight();
  }

  get carouselMargin() {
    return parseInt(this.carouselSlides.style.marginLeft) || 0;
  }

  move(margin) {
    this.carouselSlides.style.marginLeft = this.carouselMargin + margin + "%";
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