// MORPHING TIME WITH SNAP.SVG!

(function() {

var hackeryou = Snap('#snapLogo'); // object that is morphing
var wholeSvg = $('.intro'); // click trigger

var morph01 = true; //coffee shape
var morph02 = false; //heart shape


wholeSvg.on('click', function(e) {
    e.preventDefault();
    if (morph01) {
        //if square, morph into heart
        hackeryou.animate({
            // paste in heart path d values below
            d:"M76.292,0.167c-10.157,0-19.164,4.917-24.776,12.5c-5.613-7.583-14.621-12.5-24.778-12.5 c-17.015,0-30.809,13.794-30.809,30.81c0,16.209,14.433,26.861,23.588,38.352c8.481,10.644,17.646,20.881,26.562,31.169 c2.174,2.508,4.394,4.987,6.55,7.502C64.17,93.932,75.567,79.731,87.306,65.827c8.774-10.395,19.797-20.174,19.797-34.85 C107.103,13.961,93.309,0.167,76.292,0.167z M23.082,56.156l14.831-14.828l-14.831-14.77l4.087-4.083L45.912,41.27L27.111,60.127 L23.082,56.156z M75,66H44v-6h31V66z" 
            // fill: "#D12026"
        }, 
            500, // duration
            mina.easein // special easing functions built into snap.svg
        ); 

        morph01 = false; 
        morph02 = true;

    } else if (morph02) {
        //if heart, morph back into square - paste in square path d values
        hackeryou.animate({
            d:"M0,0v102h102V0H0z M23.082,61.156l14.831-14.828l-14.831-14.77l4.087-4.083L45.912,46.27L27.111,65.127 L23.082,61.156z M75,71H44v-6h31V71z" 
            // fill: "#ffffff"
        }, 
            500, 
            mina.easein
        ); 

        morph02 = false;
        morph01 = true;
    } 
});

})()




        var ranger = $('#yellow-ranger');
        var button = $('.morphin-time');
        var animate = $('.morph-time');
        var animateback = $('.morph-back');
        var morphed = true;

        ranger.on('click', function(e) {
            e.preventDefault();
            if (morphed) {
                animate.each(function(i, el) {
                    el.beginElement();        
                });
                morphed = false;
            } else {
                animateback.each(function(i, el) {
                    el.beginElement();        
                });
                morphed = true;
            }
        });

        button.on('click', function(e) {
            e.preventDefault();
            if (morphed) {
                animate.each(function(i, el) {
                    el.beginElement();        
                });
                morphed = false;
            } else {
                animateback.each(function(i, el) {
                    el.beginElement();        
                });
                morphed = true;
            }
        });