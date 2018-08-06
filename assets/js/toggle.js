import MYNS from './leaflet.js';
//import FAQTZ from './faq.js';


MYNS.toggle= function () {
    $(document).ready(function(){
        $(".toggle-content-element").click(function(){
            $(this).next().slideToggle();
        });
    });


}


MYNS.toggle();