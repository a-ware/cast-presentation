// Example Google Cast presentation Receiver app
// Slides module
//
// Created by: Amber Wareham
// Latest version: 2016-04-13


var SlideManager = function(numSlides) {
  console.log('Creating SlideManager');

  this.slides = [];
  this.index = -1;

  for (i = 1; i <= numSlides; i++) {
    this.slides[i - 1] = 'slides/Slide' + (i < 10 ? '0' + i : i) + '.jpg';
  }
};

SlideManager.prototype.initialize = function() {
  console.log('Initializing slides');

  if (this.setSlide(0)) {
      this.index = 0;
  }
};

SlideManager.prototype.prev = function() {
  console.log('Previous slide');

  if (this.setSlide(this.index - 1)) {
      this.index--;
  }
};

SlideManager.prototype.next = function() {
  console.log('Next slide');

  if (this.setSlide(this.index + 1)) {
      this.index++;
  }
};

SlideManager.prototype.setSlide = function(index) {
  if (this.slides.length === 0) {
      console.error('Slide images have not been loaded');
      return false;
  }

  console.log('Setting slide to img', this.slides[index]);

  $('#slide').attr('src', this.slides[index]);
  return true;
};

