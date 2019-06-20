$(document).ready(function() {
    $(".reset").click(function() {
        $("#lima-intro").hide();
        $("#arequipa-intro").hide();
        $("#puno-intro").hide();
        $("#cusco-intro").hide();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })


    $(function(){
        $(".markers").on("click",function(){
            $(this).next().toggle();
        });

    });

/* ----------------------------------------------------------- Navigate Lima */


    $("#lima-nav").click(function() {
        $("#lima-intro").show();
        $("#arequipa-intro").hide();
        $("#puno-intro").hide();
        $("#cusco-intro").hide();

    });

    $("#lima-attracties-header").click(function() {
        $("#lima-attracties-text").toggle();
    });
    
        $("#lima-attracties-header").click(function() {
        $(".lima-attracties").toggle();
        $(".lima-hotels").hide();
        $(".lima-restaurants").hide();
        $(".lima-info").hide()
    });

    $("#lima-hotels-header").click(function() {
        $(".lima-attracties").hide();
        $(".lima-hotels").toggle();
        $(".lima-restaurants").hide();
        $(".lima-info").hide();
    });
    $("#lima-restaurants-header").click(function() {
        $(".lima-attracties").hide();
        $(".lima-hotels").hide();
        $(".lima-restaurants").toggle();
        $(".lima-info").hide();
    });
    $("#lima-info-header").click(function() {
        $(".lima-attracties").hide();
        $(".lima-hotels").hide();
        $(".lima-restaurants").hide();
        $(".lima-info").toggle();
    });



    /* ----------------------------------------------------------- Navigate Arequipa */

    $("#arequipa-nav").click(function() {
        $("#arequipa-intro").show();
        $("#lima-intro").hide();
        $("#puno-intro").hide();
        $("#cusco-intro").hide();
    });

    $("#arequipa-attracties-header").click(function() {
        $(".arequipa-attracties").toggle();
        $(".arequipa-hotels").hide();
        $(".arequipa-restaurants").hide();
        $(".arequipa-info").hide()
    });

    $("#arequipa-hotels-header").click(function() {
        $(".arequipa-attracties").hide();
        $(".arequipa-hotels").toggle();
        $(".arequipa-restaurants").hide();
        $(".arequipa-info").hide();
    });
    $("#arequipa-restaurants-header").click(function() {
        $(".arequipa-attracties").hide();
        $(".arequipa-hotels").hide();
        $(".arequipa-restaurants").toggle();
        $(".arequipa-info").hide();
    });
    $("#arequipa-info-header").click(function() {
        $(".arequipa-attracties").hide();
        $(".arequipa-hotels").hide();
        $(".arequipa-restaurants").hide();
        $(".arequipa-info").toggle();
    });

    /* ----------------------------------------------------------- Navigate Arequipa */

    $("#cusco-nav").click(function() {
        $("#cusco-intro").show();
        $("#lima-intro").hide();
        $("#puno-intro").hide();
        $("#arequipa-intro").hide();
    });

    $("#cusco-attracties-header").click(function() {
        $(".cusco-attracties").toggle();
        $(".cusco-hotels").hide();
        $(".cusco-restaurants").hide();
        $(".cusco-info").hide()
    });

    $("#cusco-hotels-header").click(function() {
        $(".cusco-attracties").hide();
        $(".cusco-hotels").toggle();
        $(".cusco-restaurants").hide();
        $(".cusco-info").hide();
    });
    $("#cusco-restaurants-header").click(function() {
        $(".cusco-attracties").hide();
        $(".cusco-hotels").hide();
        $(".cusco-restaurants").toggle();
        $(".cusco-info").hide();
    });
    $("#cusco-info-header").click(function() {
        $(".cusco-attracties").hide();
        $(".cusco-hotels").hide();
        $(".cusco-restaurants").hide();
        $(".cusco-info").toggle();
    });
    

/*

 $(".destination-headers").click(function() {
        $(this).children("ol").toggle();
    });

    $(".markers").click(function() {
        $(this).children("li").toggle();
    });

    $("#arequipa-attracties-header").click(function() {
        $("#arequipa-attracties-text").toggle();
    });

    $("#arequipa-attracties-header").click(function() {
        $("#arequipa-attracties-text").toggle();
    });



    $("#arequipa-hotels-header").click(function() {
        $("#arequipa-hotels-text").toggle();
    });

    $("#arequipa-restaurants-header").click(function() {
        $("#arequipa-restaurants-text").toggle();
    });

    $("#arequipa-handig-header").click(function() {
        $("#arequipa-handig-text").toggle();
    });

    $("#arequipa-juanita-icon").click(function() {
        $("#arequipa-attracties-text").toggle();
    });
*/
    /* ----------------------------------------------------------- Map Arequipa */

    /* ----------------------------------------------------------- Scroll down */

    /* code used from https://www.daddydesign.com/wordpress/how-to-smoothly-scroll-to-a-specific-element-using-jquery/ */
    $('.scroll-to').click(function(e) {
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        e.preventDefault();
    });

});
