$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $("div")

for (var i = 0; i < tags.length; i++) {
var tag = tags[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
} else {  $(tag).removeClass("visible")
}
}
})

var btn = document.querySelectorAll(".btn-outline-danger");
for(var i=0;i<btn.length;i++){
btn[i].addEventListener("click", function(){
	this.classList.toggle("active");
});
};

