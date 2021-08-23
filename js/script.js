$(document).ready(function(){


    $(".button").magnificPopup();

    	//E-mail Ajax Send
	$("formX").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/phpmailer/phpmailer.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, ваша заявка принята. С вами свяжется менеджер в ближайшее время!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

    //nojs
    $("body").removeClass("no-js");

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});

    //------------------------------------------------------------------------//

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//

    // tab
    $(function(){
        $('.tabs').delegate('li:not(.active)','click',function(){
            $(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);
        })
    });

    // tab arrows
    if ( $(".tab").has(".tab-prev").length || $(".tab").has(".tab-next").length ) {
        $('.tab-prev, .tab-next').click(function(){
            var $active = $(this).parents(".tab").find(".tabs .active");
            $next = $(this).hasClass('tab-prev') ? $active.prev() : $active.next();
            if (!$next.length) $next = $(this).hasClass('tab-prev') ? $(this).parents(".tab").find('.tabs li:last') : $(this).parents(".tab").find('.tabs li:first');
            $next.click();
            return false;
        });
    }

    //------------------------------------------------------------------------//

});//document ready