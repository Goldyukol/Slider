let slider = {
    imageArray: [],
    currentIndex: 0,
    leftImg: document.getElementById('left-img'),
    rightImg: document.getElementById('right-img'),
    slideImg: document.getElementById('slide-img'),

    start: function () {
        let that = this;

        this.leftImg.addEventListener('click', function (event) {
            that.onShowLeftImg(event);
        });
        this.rightImg.addEventListener('click', function (event) {
            that.onShowRightImg(event);
        });

        this.imageArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx6kbyGsin9D0M0GstdLyeYnRxtMkTHx8fCHi1Rf_tPDhDvcmT');
        this.imageArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJdkgTBQc2qWOkzlvG6_GIMZOyiBKOcjTlw77zE-VEDQJSguvE');
        this.imageArray.push('https://i.ytimg.com/vi/YizPeVoFDCs/hqdefault.jpg');
        this.imageArray.push('https://crdms.images.consumerreports.org/c_scale,f_auto,h_250,w_355/prod/cars/cr/car-groups/107-11362');


        this.slideImg.src = this.imageArray[this.currentIndex];

    },

    onShowLeftImg: function (event) {
        this.currentIndex--;
        this.slideImg.src = this.imageArray[this.currentIndex];
        this.rightImg.disabled = false

        if (this.currentIndex === 0) {
            this.leftImg.disabled = true;

        }
    },
    onShowRightImg: function (event) {
        this.currentIndex++;
        this.slideImg.src = this.imageArray[this.currentIndex];
        this.leftImg.disabled = false;

        if (this.currentIndex === this.imageArray.length - 1) {
            this.rightImg.disabled = true;

        }
    }
}