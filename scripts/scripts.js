$(document).ready(function() {
    $('img').hover(function(){
        var $imgsource = $(this).attr('src');
        var $imgnumber = $imgsource.slice(-6, -4);
        console.log($imgsource);
        console.log($imgnumber);
        var colours = ['#89CECB', '#EAC9D4', '#F2EE71', '#A0D4C8', '#A6B7B1', '#DFE11B', '#A5B7B1', '#EACE84', '#F8AC9E', '#F8AC9E', '#DFE11B', '#A6D1E1', '#ADCDB5', '#C6DAF2', '#7DCCCE', '#DFE21A', '#F36756', '#448C81', '#F8AC9E', '#F2EE71', '#448C81', '#B89693', '#448C81', '#EAC9D4', '#F36756', '#BD998D', '#89CECB', '#F36756', '#A6B7B1', '#D0C38F', '#89CECB'];

        var $arrayindex = $imgnumber - 1;
        $('body').css('background-color', colours[$arrayindex]);
        $('.container').css('background-color', colours[$arrayindex]);
    }); //end of img.hover
        
    // var swapOut = function() {
    //     var $this = $(this);
    //     var newSource = $this.data('alt-src');
    //     $this.data('alt-src', $this.attr('src'));
    //     $this.attr('src', newSource);
    // } //end of swapOut

    // $(function() {
    //     $('img').hover(swapOut, swapOut);
    // }); //end of swapOut call

    $('.container').mouseout(function() {
        $(this).css('background-color', 'rgb(254,253,251)');
        $('body').css('background-color', 'rgb(254,253,251)');
    }); //end of mouseout

    $(".fancybox").fancybox({
        padding: 0,
        openEffect:'elastic',
        closeEffect:'elastic',
        nextEffect:'elastic',
        prevEffect:'elastic'
    });
    

}); //end of document.ready