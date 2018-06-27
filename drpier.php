
<html>
<head>
    <title>Die Tierartztpraxis</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="node_modules/bootstrap-vue/dist/bootstrap-vue.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,600,700,800" rel="stylesheet">




</head>
<body class="bg-color">

<style>
    .navcolor {background-color: #b61e3e;}
    .maincolor {color: #f4f4f4 !important;}



    .bg-color {
        background-color: #f9f9f9;
    }


    .containerH {
        position: relative;
        text-align: center;

    }


    .bottom-left {
        position: absolute;
        bottom: 180px;
        left: 20%;
    }





 .fontmain {
     font-family: 'Nunito Sans', sans-serif;

 }

    .headline {
    font-size: 60px;
    }


    .subheadline {
        font-size: 40px;
    }

    .subheadline-small {
        font-size: 30px;
    }

    .flowingtext {
        font-size: 22px;
    }

    .fontcolor-red{
        color:  #b61e3e;
    }

    .fontcolor-white{
        color: #f4f4f4;
    }

    .fontcolor-black{
        color: #212121;
    }




    .gap-top-10 {
        margin-top: 10px;
    }

.gap-top-30 {
    margin-top: 30px;
}

    .gap-top-60 {
        margin-top: 60px;
    }

    .gap-top-90 {
        margin-top: 90px;
    }

    .gap-top-120 {
        margin-top: 120px;
    }
    .gap-top-240 {
        margin-top: 240px;
    }









    * {
        box-sizing: border-box;
    }

    #myInput {
        background-image: url('/css/searchicon.png');
        background-position: 10px 12px;
        background-repeat: no-repeat;
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid #ddd;
        margin-bottom: 12px;
    }

    #myUL {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    #myUL li a {
        border: 1px solid #ddd;
        margin-top: -1px; /* Prevent double borders */
        background-color: #f6f6f6;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        color: black;
        display: block
    }

    #myUL li a:hover:not(.header) {
        background-color: #eee;
    }


.liste {

    display:none;

}












</style>






<div id="app" class="fontmain">



    <navigation-template></navigation-template>



    <div class="containerH">

    <img src="assets/img/header.jpg" class="img-fluid" width="100%">
        <div class="bottom-left  fontcolor-red">
            <h1 class="headline">HEADLINE</h1>
            <h2 class="subheadline">SUBHEADLINE</h2>
        </div>

</div>


    <div class="container-fluid">










        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">



        <script>
            function myFunction() {
                var input, filter, ul, li, a, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                ul = document.getElementById("myUL");
                li = ul.getElementsByTagName("li");

                if (filter.length >4) {   //NUMBER OF CHARAKTERS- FOR SAFETY

                    for (i = 0; i < li.length; i++) {
                        a = li[i].getElementsByTagName("p")[0];
                        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            li[i].style.display = "block";
                        } else {
                            li[i].style.display = "none";

                        }
                    }
                }
            }
        </script>






        <?php

$dirHandle = dir("bilder");
 $verz=opendir('bilder/');


while (($f = $dirHandle->read()) != false) {
        // Nur ausgeben, wenn nicht . oder ..
        if ($f != "." && $f != ".."){
        // Wenn es sich um ein Verzeichnis handelt
        if (is_dir("bilder/".$f)){



       // echo "<em>".$f."</em><br />";


        $verz=opendir('bilder/'.$f);

 echo " <ul id=\"myUL\">";

        while($file = readdir($verz)){
        if($file != '.' && $file != '..'){
        $info = getimagesize($verz.$file);
        echo "<li class=\"liste\"><p> $f</p> <a href=\"bilder/$f/$file\" ><img  src=\"bilder/$f/$file\" $info[3] width=\"120\" height=\"auto\" alt=\"\"></a></li>";

        }
        }
        closedir($verz);



        }
        else {
        echo "<br />";
        }
        }
        }

 echo " </ul>";
        // Verzeichnis wieder schließen
        $dirHandle->close();
        ?>










    </div> <!-- END containerfluid-->

</div> <!-- APP END-->


























<!-- Add this after vue.js -->

<script src="node_modules/vue/dist/vue.js"></script>


<script src="//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>








<script  src="app.js"></script>






<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
</body>
</html>
