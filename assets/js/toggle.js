import MYNS from './leaflet.js';



MYNS.toggle= function () {
    $(document).ready(function(){
        $(".toggle-content-element").click(function(){
            $(this).next().slideToggle();
        });
    });


}


MYNS.toggle();