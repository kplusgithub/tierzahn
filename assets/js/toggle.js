
import MYNS from './leaflet.js';
import FAQTZ from './faq.js';
import newsTz from './news.js';

MYNS.toggle= function () {
    $(document).ready(function(){
        $(".toggle-content-element").click(function(){
            $(this).next().slideToggle();
        });
    });


}


MYNS.toggle();