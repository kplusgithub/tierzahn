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

 echo " <ul id=\"myUL\" class=\"list-inline\">";

        while($file = readdir($verz)){
        if($file != '.' && $file != '..'){
        $info = getimagesize($verz.$file);
        echo "<li class=\"liste list-inline-item\"><p style=\"display:none;\"> $f</p> <a href=\"bilder/$f/$file\" ><img  src=\"bilder/$f/$file\" $info[3] width=\"130\" height=\"auto\" alt=\"\"></a></li>";

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