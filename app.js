


var datatemp={nachricht:""};

Vue.component('navigation-template', {

    template:`
    
    <nav class="navbar navbar-expand-lg navbar-dark maincolor navcolor sticky-top">
       <a class="navbar-brand" href="index.html"><img src="assets/img/tierzahn-logo-white-2.png" width="128px"> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto maincolor">
                <li class="nav-item ">
                    <a class=" nav-link maincolor" href="pier.html">TIERARZTPRAXIS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="krueger.php">TIERZAHNHEILKUNDE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#praxis">PRAXIS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#team">TEAM</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#faq">FAQ</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#jobs">JOBS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#presse">PRESSE</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#kontakt">KONTAKT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="index.html#impressum">IMPRESSUM/ DATENSCHUTZ</a>
                </li>



            </ul>

        </div>
    </nav>`,

    data: function(){

        return  datatemp;

    },


    mounted() {

        this.getNachricht();

},

methods: {

        getNachricht() {
            this.nachricht+=""+" "+"bist super!"

    }

}


});








// Create new Vue instance and mount onto elmement with id app
new Vue({
    el: '#app'


});

