// JQuery Smooth Scroll 
$('.navigation a').on('click', function (e){
    if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;

        $('html, body, header').animate(
            {
            scrollTop: $(hash).offset().top
        },
            800
        );
    }
        
});
