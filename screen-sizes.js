var current_size = 10000;
var item_per_page = 2;
var filter = ':lt('+2+')';

$(window).resize(function() {
    var new_size = $(window).width()-1;
    if (new_size <= 375) new_size = 375;
    else if (new_size <= 677) new_size = 677;
    else if (new_size <= 768) new_size = 768;
    else if (new_size <= 812) new_size = 812;
    else if (new_size <= 1024) new_size = 1024;
    else new_size = 1068;
    if (current_size != new_size) {
        setTimeout(() => {
            current_size = new_size;
            // all 3
            // 1024 2
            // 767 1
            if (current_size > 1024) {
                item_per_page = 3;
                filter = ':lt('+3+')';
            } else if (current_size > 767) {
                item_per_page = 2;
                filter = ':lt('+2+')';
            } else {
                item_per_page = 1;
                filter = ':lt('+1+')';
            }
        }, 300);
    }
    
    
});


var $listElements = $(".teachers .cs-item");  
$listElements.hide();
$listElements.filter(filter).show();

if($listElements.length > item_per_page) {
	$('.load-more-button').show()
}

$(".load-more-button").click(function(){
    $(this).toggle();
    $(".load-less-button").toggle();
    $listElements.show();
});
$(".load-less-button").click(function(){
    $(this).toggle();
    $(".load-more-button").toggle();
    $listElements.hide();
    $listElements.filter(filter).show();
});

