$(document).ready(function() {
    $('#shake').click(function() {
        let parent = $('.rainbow');
        let divs = parent.children();
        divs.sort(function() { return Math.random() - 0.5; });
        parent.empty().append(divs);
    });
});

$(function(){
    $('.rainbow').sortable();
    verifyOrder();
});

function verifyOrder() {
    $('#result').text('Vous avez perdu').css('color', 'red');
}