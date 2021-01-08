
function change_tab(id)
 {
   document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
   document.getElementById("page1").className="notselected";
   document.getElementById("page2").className="notselected";
   document.getElementById("page3").className = "notselected";
   document.getElementById("page4").className="notselected";
   document.getElementById(id).className="selected";
 }
 
   (function () {
            'use strict';
            window.addEventListener('load', function () {
              var forms = document.getElementsByClassName('needs-validation');
              var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
})();
          

   
