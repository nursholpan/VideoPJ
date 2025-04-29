/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(e) {
        if (!$(e.target).closest('.modalBox-body').length) {
            $(this).removeClass('show');
            $('#main-video')[0].pause();
        }
    });

    $('#main-video').on('ended', function() {
        const currentSrc = $('#main-video').find('source').attr('src');

        $('.video-option').hide();
        $('.video-option').each(function() {
            const optionSrc = $(this).data('src');
            if(optionSrc !== currentSrc){
                $(this).show();
            }
        });


        $('#video-options').fadeIn();

    });

    $('.video-option').click(function() {
        const newSrc = $(this).data('src');
        const video = $('#main-video');
        video.find('source').attr('src', newSrc);
        video[0].load();
        video[0].play();
        $('#video-options').hide();
    });

    $('#main-video').on('play seeking', function() {
        $('#video-options').hide();
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 
