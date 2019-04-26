$(function() {

    $('.faq-list-item').click(function(){
        var $answer = $(this).find('.answer');
        var $angle = $(this).find('.fa');

        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
            $angle.removeClass('fa-angle-up');
            $angle.addClass('fa-angle-down');
        }else{
            $answer.addClass('open');
            $answer.slideDown();
            $angle.addClass('fa-angle-up');
            $angle.removeClass('fa-angle-down');
        }
    });
});