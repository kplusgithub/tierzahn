

var FAQTZ=(function(){

    var loaderJson=(function(){



       var  load={

            async: function(cFunction) {

                var xhttp = new XMLHttpRequest();
                //xhttp.overrideMimeType(JSON);

                xhttp.onreadystatechange = function (){
                if (this.readyState === 4 && this.status === 200) {

                   //console.log(this.response);
                    cFunction(this);


                }


            };

                xhttp.open("get","faq.json", "true");
                xhttp.send(null);



            }
        };


        return load;

    })();



    var uiController=(function(loadjson){





        function domWrite(xhttp) {


            var template= '<div class="row gap-top-30"><div class="col-sm card"><div class="card-body">' +
                '<h3 class="card-text toggle-content-element question">%question1%<span style="float: right;">' +
                '<img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span></h3>' +
                '<p class="card-text flowingtext toggle-element answer">%answer1%</p></div></div><div class="col-sm card"><div class="card-body">' +
                '<h3 class="card-text toggle-content-element question">%question2%<span style="float: right;"><img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span>' +
                '</h3><p class="card-text flowingtext toggle-element answer">%answer2%</p></div></div></div>';






            var obj= {};
            obj= JSON.parse(xhttp.responseText);



               for(var  i=0; i< Object.keys(obj.faq).length; i+=2) {


                   var newTemplate = template.replace('%question1%', obj.faq[i].q);
                   newTemplate = newTemplate.replace('%answer1%', obj.faq[i].a);

                   newTemplate = newTemplate.replace('%question2%', obj.faq[i+1].q);
                   newTemplate = newTemplate.replace('%answer2%', obj.faq[i+1].a);


                   document.querySelector('.faq-el').insertAdjacentHTML('beforeend', newTemplate);



               };





        };

      function init(){

       loadjson.async(domWrite);

      };

        return init;






    })(loaderJson);


    return {uiController, loaderJson};


})();

FAQTZ.uiController();

export default FAQTZ;
