javascript:(function(){alert("Hello"); })()

javascript:(function(){
    for(x=1; x <= 20; x++) {
        setTimeout(function (name){
            document.querySelector('input.new-todo').value=name;
            document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
        }, x*100, ("todo " + x));
    }
})()

prompt("how many")


javascript: (function() {
    max = prompt("how many")
    if (max) {
        for (x = 1; x <= max; x++) {
            setTimeout(function(name) {
                document.querySelector('input.new-todo').value = name;
                document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
                    'bubbles': true
                }));
            }, x * 100, ("todo " + x));
        }

    }
}
)()


//[Patern]
javascript:(function(){


})()