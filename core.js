var H10_8 = ["H10GT", "H10VLT", "H10VRT", "H10GM div.mdl.top_mdl","H10GM div.mdl.btm_mdl",
"H10VLB", "H10VRB", "H10GB"];
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
      foo(0);
};


function foo(j){
if(j < H01.length){
    Reset(H01[j]);
    Set(H01[j]);
    window.setTimeout(foo(j + 1), 1000);
  }
}


function Set(slctr){
    for (i = 0; i < slctr.length; i++){
      document.querySelector("#" + slctr[i]).className += " active";  
    }
}
function Reset(slctr){
    for (i = 0; i < slctr.length; i++){
      t = document.querySelector("#" + slctr[i]);
      t.className = t.className.substr(0, t.className.indexOf(" active"));
        
    }
}


