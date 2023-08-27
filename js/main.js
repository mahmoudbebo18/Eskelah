    // owl trigger


    // services owl
    $(document).ready(function () {
        $('.services_owl').owlCarousel({
            nav: true, // Show navigation buttons
            rtl: true, // Right-to-left support
            autoplay: true, // Autoplay enabled
            autoplayTimeout: 3000, // Autoplay duration in milliseconds
            loop: true, // Loop the carousel
            margin: 20,
            navText: [
                `
                <img src="../imgs/arrow_left.png" class="arrow_img" alt="right arrow" />
                `
                ,
                `
                <img src="../imgs/arrow_right.png" class="arrow_img" alt="right arrow" />
                `
            ],
            responsive: {
                0: {
                    items: 1.5 // Number of items shown on smaller screens
                },
                600: {
                    items: 2 // Number of items shown on medium screens
                },
                1000: {
                    items: 3 // Number of items shown on larger screens
                },
                1400: {
                    items: 4
                }
            }
        });
    });

    //team owl 


    $(document).ready(function () {
        $('.owl-carousel.team_owl').owlCarousel({
            nav: true, // Show navigation buttons
            rtl: true, // Right-to-left support
            autoplay: true, // Autoplay enabled
            autoplayTimeout: 3000, // Autoplay duration in milliseconds
            loop: true, // Loop the carousel
            margin: 20,
            navText: [
                `
                <img src="../imgs/arrow_left.png" class="arrow_img" alt="right arrow" />
                `
                ,
                `
                <img src="../imgs/arrow_right.png" class="arrow_img" alt="right arrow" />
                `
            ],
            responsive: {
                0: {
                    items: 1.5 // Number of items shown on smaller screens
                },
                600: {
                    items: 2 // Number of items shown on medium screens
                },
                1000: {
                    items: 3 // Number of items shown on larger screens
                },
                1400: {
                    items: 4
                }
            }
        });
    });


    ///partner_owl


    $(document).ready(function () {
        $('.owl-carousel.partner_owl').owlCarousel({
            nav: true, // Show navigation buttons
            rtl: true, // Right-to-left support
            autoplay: true, // Autoplay enabled
            autoplayTimeout: 3000, // Autoplay duration in milliseconds
            loop: true, // Loop the carousel
            margin: 20,
            navText: [
                `
                <img src="../imgs/arrow_left.png" alt="right arrow" />
                `
                ,
                `
                <img src="../imgs/arrow_right.png" alt="right arrow" />
                `
            ],
            responsive: {
                0: {
                    items: 3 // Number of items shown on smaller screens
                },
                600: {
                    items: 5 // Number of items shown on medium screens
                },
                1000: {
                    items: 5// Number of items shown on larger screens
                },
                1400: {
                    items: 6
                }
            }
        });
    });