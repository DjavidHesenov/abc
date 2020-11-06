$(document).ready(function(){
    let position = 0;
    const SlidesToShow = 3;
    const SlidesToScroll = 2;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / SlidesToShow; 
    const movePosition = SlidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount - (Math.abs(position) +  SlidesToShow * itemWidth) / itemWidth;

        position -= movePosition >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;
        
        setPosition();
        checkBtns();
    });

    btnPrev.click(function(){ 
        // const itemsLeft
        position += movePosition;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {        
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled', 
            position <= - (itemsCount - SlidesToShow) * itemWidth
        );
    };

    checkBtns();
    
});



