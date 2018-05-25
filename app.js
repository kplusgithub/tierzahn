


Vue.component('static-post', {

    // setting the template that this component will use to render
    template: '#static-post-temp',

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
    posts: [],
    message: 'he'
}),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them
mounted() {
    this.getPosts();
    this.getMessage();
},


// this is where you define all the methods this component needs
methods: {

    // getPost simply sets the 'posts' variable with static data
    getPosts() {
        this.posts = [
            {
                "title": "The first post title!"
            },
            {
                "title": "The second post title!"
            },
            {
                "title": "The third post title!"
            }
        ];
    },

    getMessage(){
        this.message="HALLO"


    }

}
});





var datatemp={nachricht:""};

Vue.component('variable-data', {

    template:"#variable",

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

