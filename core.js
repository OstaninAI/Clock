var H10_8 = ["H10GT", "H10VLT", "H10VRT", "H10GM div.mdl.top_mdl","H10GM div.mdl.btm_mdl",
"H10VLB", "H10VRB", "H10GB"];
var H10_2 = ["H10GT", "H10GM div.mdl.top_mdl","H10GM div.mdl.btm_mdl",
"H10VRT", "H10VLB", "H10GB"];
var H10_1 = ["H10VRT", "H10VRB"];
var H10_0 = ["H10GT", "H10VLT", "H10VRT",
"H10VLB", "H10VRB", "H10GB"];
var H10  = [H10_0, H10_1, H10_2];
var H01_9 = ["H01GT", "H01VLT", "H01VRT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VRB", "H01GB"];
var H01_8 = ["H01GT", "H01VLT", "H01VRT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VLB", "H01VRB", "H01GB"];
var H01_7 = ["H01GT", "H01VRT", "H01VRB"];
var H01_6 = ["H01GT", "H01VLT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VLB", "H01VRB", "H01GB"];
var H01_5 = ["H01GT", "H01VLT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VRB", "H01GB"];
var H01_4 = ["H01VLT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VRT", "H01VRB"];
var H01_3 = ["H01GT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VRT", "H01VRB", "H01GB"];
var H01_2 = ["H01GT", "H01GM div.mdl.top_mdl","H01GM div.mdl.btm_mdl",
"H01VRT", "H01VLB", "H01GB"];
var H01_1 = ["H01VRT", "H01VRB"];
var H01_0 = ["H01GT", "H01VLT", "H01VRT",
"H01VLB", "H01VRB", "H01GB"];
var H01  = [H01_0, H01_1, H01_2, H01_3, H01_4, H01_5, H01_6, H01_7, H01_8, H01_9];


window.onload = function (){        
      
};


function TikTak(hh, h){
 window.setTimeout(function (hh, h){
    if(h < (H01.length - 1)){
     h++;
   }else {
      if(hh < (H10.length - 1)){
      hh++;
      } else{hh = 0;}
      h = 0;
      if(hh){Reset(H10[hh - 1]);}
      else{Reset(H10[2]);}
      Set(H10[hh]);
   }
     if(h){Reset(H01[h - 1]);}
    else{Reset(H01[8]);}
    Set(H01[h]);     
   
  TikTak(hh, h);
 }, 1000, hh, h);
  return 0;
}


function Set(slctr){
    for (i = 0; i < slctr.length; i++){
      document.querySelector("#" + slctr[i]).className += " active";  
    }
    return 0;
}
function Reset(slctr){
    for (l = 0; l < slctr.length; l++){
      t = document.querySelector("#" + slctr[l]);
      if((t.className.indexOf(" active")) > 0){
          t.className = t.className.substr(0, t.className.indexOf(" active"));}
    }
}
