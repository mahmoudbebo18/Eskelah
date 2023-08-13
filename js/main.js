$(document).ready(function () {
    // owl trigger


    // services owl
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            nav: true, // Show navigation buttons
            rtl: true, // Right-to-left support
            autoplay: true, // Autoplay enabled
            autoplayTimeout: 3000, // Autoplay duration in milliseconds
            loop: true, // Loop the carousel
            margin: 20,
            navText: [
                `
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FEE000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                `
                ,
                `
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FEE000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                `
            ],
            responsive: {
                0: {
                    items: 1 // Number of items shown on smaller screens
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
})