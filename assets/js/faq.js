var FAQTZ=(function(){

    loaderJson=(function(){



        load={

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



    uiController=(function(loadjson){

        var domStrings ={

            question: '.question',
            answer: '.answer'

        };



        function domWrite(xhttp) {


            var template= '<div class="row gap-top-30"><div class="col-sm card"><div class="card-body"><h3 class="card-text toggle-content-element question">%question%<span style="float: right;"><img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span></h3><p class="card-text flowingtext toggle-element answer">%answer%</p></div></div><div class="col-sm card"><div class="card-body"><h3 class="card-text toggle-content-element question">%question%<span style="float: right;"><img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span></h3><p class="card-text flowingtext toggle-element answer">%answer%</p></div></div></div>';






            var obj= {},
                listQuestion,
                listAnswer;
            obj= JSON.parse(xhttp.responseText);

            listQuestion=  document.querySelectorAll(domStrings.question);
             listAnswer=  document.querySelectorAll(domStrings.answer);

           for( i=0; i< listQuestion.length; i++) {

               listQuestion[i].innerHTML = obj.faq[i+1].q;
               newTemplate = template.replace('%question%', obj.faq[i+1].q);
               document.querySelector(.faq-el).insertAdjacentHTML('beforeend', newTemplate);

           };


            for( i=0; i< listAnswer.length; i++) {


                listAnswer[i].innerHTML = obj.faq[i+1].a;

            };



           console.log( listAnswer);
        };

        loadjson.async(domWrite);


       //console.log(json);





    })(loaderJson);


    return {loaderJson, uiController};


})();

//console.log(FAQTZ.loaderJson.async());


//console.log(FAQTZ.uiController.json);
//FAQTZ.async();

//export default FAQ_TZ;