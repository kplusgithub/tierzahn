


var datatemp={nachricht:""};

Vue.component('navigation-template', {

    template:`
    
    <nav class="navbar navbar-expand-lg navbar-light maincolor navcolor">
        <a class="navbar-brand maincolor " href="#">Navbar</a>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto maincolor">
                <li class="nav-item ">
                    <a class=" nav-link maincolor" href="#">TIERARZTPRAXIS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">TIERZAHNHEILKUNDE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">PRAXIS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">TEAM</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">FAQ</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">JOBS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">PRESSE</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">KONTAKT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link maincolor" href="#">IMPRESSUM/ DATENSCHUTZ</a>
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

