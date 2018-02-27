$(document).ready(function () {
    $('.hidden').fadeIn(1000).removeClass('hidden');
});



$(document).ready(function () {
    if($('.left').innerHeight() > $('.container').innerHeight()) {
        $('.left').addClass('border-right');
    } else {
        $('.container').addClass('border-left');
    }
});