function scrollToId (id) {
    var el = document.getElementById(id);
    var y = el.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
        behavior: "smooth",
    });
} 

document.querySelectorAll("a.btn.site-menu, a.fn-item").forEach(function(el) { 
    el.addEventListener("click", function(ev) {
        scrollToId(el.dataset.targetId);
    });
});

function onScrolled() {
    var lastActive = null;
    document.querySelectorAll("a.fn-item").forEach(function(el) { 
        var article = document.querySelector("article[id='" + el.dataset.targetId + "']")
        var articleRect = article.getBoundingClientRect();
        var height = document.documentElement.clientHeight;
        var tol = height / 10;

        console.log(el.dataset.targetId, articleRect.top, articleRect.bottom);
        if (articleRect.top < tol && articleRect.bottom > 0) {
            lastActive = el;
        }

        el.classList.remove("active");
    });
    document.querySelector(".fixed-nav").classList.toggle("visible", lastActive != null);
    if (lastActive != null) {
        lastActive.classList.add("active");
    }
}

let ticking = false;
document.addEventListener('scroll', function(e) {
    if (ticking) {
        return;
    }

    ticking = true;
    window.requestAnimationFrame(function() {
        onScrolled();    
        ticking = false;
    });
});