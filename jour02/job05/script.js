function perc() {
    let html = document.documentElement
        body = document.body
        q = 'scrollTop'
        s= 'scrollHeight'
    return ((html[q] || body[q]) / ((html[s] || body[s]) - html.clientHeight)) * 100
}

function bar() {
    let scrollPercentage = perc();
    document.body.className = ''; 
        if (scrollPercentage >= 25) {
            document.body.classList.add('scroll-25')
        }
        if (scrollPercentage >= 50) {
            document.body.classList.add('scroll-50')
        }
        if (scrollPercentage >= 75) {
            document.body.classList.add('scroll-75')
        }
        if (scrollPercentage >= 100) {
            document.body.classList.add('scroll-100')
        }
}
window.addEventListener('scroll', function() {
    bar()
})

window.addEventListener('load', function() {
    bar()
})
