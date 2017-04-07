var chaine1 = "Développeur Web Front End.";
 ;
 var nb_car1 = chaine1.length;
 var tableau1 = chaine1.split("");
 texte1 = new Array;
 var txt1 = '';
 var nb_msg1= nb_car1 - 1;
 for (i=0; i<nb_car1; i++) {
 texte1[i] = txt1+tableau1[i];
 var txt1 = texte1[i];
 }  actual_texte1 = 0;
 function changeMessage1()
 {
 document.getElementById("dev").innerHTML = texte1[actual_texte1];
 actual_texte1++;
 if(actual_texte1 >= texte1.length)
 actual_texte1 = nb_msg1;
 }
 if(document.getElementById)  setInterval("changeMessage1()",100) /* la vitesse de defilement (plus on a une valeur faible plus
 texte s'affiche rapidement) */

// *************************************************************
// *************************************************************

 $(window).scroll
 (
   function()
   {
     if ($(window).scrollTop() != 0)
     $('#ampoule').css( {'opacity' : '1' });
     else
     $('#ampoule').css( {'opacity' : '0' });
   }
 );
