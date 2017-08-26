$(document).ready(function() {
    $('#navbutton').click(function() {
        $('nav').slideUp("fast", function(){
            $('#shownav').fadeIn(1);
        });
    });

    $('#shownav').on("click",function() {
        $('#shownav').css('display', 'none');
        $('nav').slideDown("fast", function() {});
    });
});
