let article = document.getElementById("article");
function showhide(){
    if (getComputedStyle(article).display != "none"){
        article.style.display ="none";
    }else {
        article.style.display ="block";
    }
    }
article.onclick = showhide()
