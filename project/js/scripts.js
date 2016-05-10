// MORPHING TIME WITH SNAP.SVG!

(function() {

var coffee = Snap('#snapCoffee'); // object that is morphing
var wholeSvg = $('#coffee-animation'); // click trigger

var morph01 = true; //coffee shape
var morph02 = false; //heart shape


wholeSvg.on('click', function() {

    if (morph01) {
        //if coffee, morph into heart
        coffee.animate({
            // paste in heart path d values below
            d:" "
        }, 
            500, // duration
            mina.easein // special easing functions built into snap.svg
        ); 

        morph01 = false; 
        morph02 = true;

    } else if (morph02) {
        //if heart, morph back into coffee - paste in coffee path d values
        coffee.animate({
            d:" "
        }, 
            500, 
            mina.easein
        ); 

        morph02 = false;
        morph01 = true;
    } 
});

})()