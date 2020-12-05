

var btn = document.querySelectorAll(".btn-outline-danger");
for(var i=0;i<btn.length;i++){
btn[i].addEventListener("click", function(){
	this.classList.toggle("active");
});
};

