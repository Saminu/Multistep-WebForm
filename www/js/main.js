/**
 * Created by simba on 12/10/2014.
 */

//load header function

$(document).ready(function () {

    $("#header").load("/templates/header.html", function () {
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function () {
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    });

    $( "a .dropdown-toggle").hover(function(event) {
        console.log(event);
  //      $(this).dropdown('toggle')
    });
});


//load footer function
$(function(){
    $("#footer").load("/templates/footer.html");
    $("#leftsiderbar").load("/templates/leftsidebar.html");
    $('.keyword').html("Hello World");
});


$('.carousel').carousel({
    interval: 4000
});

var expandAddress = function(){
    document.getElementById('selectadd').size='5';
    document.getElementById('selectadd').style.height = "200px";
},
    compressAddress = function(){
        document.getElementById('selectadd').size='1';
        document.getElementById('selectadd').style.height = "46px";
    };



//read string query and pass to site

// read query

//replace all keywords