var TZNEWS = (function(){

var requestNews = function(cFunction) {

    var xhttp = new XMLHttpRequest();



    xhttp.onreadystatechange= function(){
        if( this.readyState ===4 && this.status ===200){

            try{
            cFunction(this);
            }  catch(error) {
                console.log(error + "!!! IN DER NEWS.JSON IST EIN FEHLER");
            };
            //console.log(this.response);

        }

    };


    xhttp.open("get","news.json", "true");
    xhttp.send(null);

};





    var domwrite= function(xhttp) {

        var xhttp = JSON.parse(xhttp.responseText);



        var template = `<div  class="sticky-top d-none d-sm-block text-danger newsbar" >
        <div class="newsbar__container"> </div>
        <div class="newsbar__content" >
            <h4 style="padding-top: 100px;padding-left: 60px;">${xhttp.newsHeadline}</h4>
            <p style="padding-left: 60px;">${xhttp.newsText}</p>
        </div>
    </div>`
        //template = template.replace('%HEADLINE%', xhttp.newsHeadline);
       // template = template.replace('%TEXT%', xhttp.newsText);

        if(xhttp.newsOnline ===true) {

        document.querySelector('.news').insertAdjacentHTML('afterend', template);
        };


    };




    requestNews(domwrite);




}());

export default TZNEWS;