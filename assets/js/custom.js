function toggle(someId) {
	// console.log(someId.split(" ")[0]);
	// var this = someId.split(" ")[0];
	// var someId2 = someId.split(" ")[1];
	var button = document.getElementById(someId.split(" ")[0]);
    var someElem = document.getElementById(someId.split(" ")[1]);
    if(someElem.style.maxHeight == "2000px"){
    	someElem.style.maxHeight ="0px";
    	button.value = "Learn More";

    }else{
    	someElem.style.maxHeight ="2000px";
    	button.value = "Show Less";
    }
    // someElem.className = someElem.className == 'card-content hidden' ? 'card-content' : 'card-content hidden';
}

function toggle2(someId) {
	// console.log(someId.split(" ")[0]);
	// var this = someId.split(" ")[0];
	// var someId2 = someId.split(" ")[1];
	var someElem = document.getElementById(someId);
    if(someElem.style.maxHeight == "2000px"){
    	someElem.style.maxHeight ="0px";
    	button.value = "Learn More";

    }else{
    	someElem.style.maxHeight ="2000px";
    	button.value = "Show Less";
    }
    // someElem.className = someElem.className == 'card-content hidden' ? 'card-content' : 'card-content hidden';
}

function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('span');
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						$(".publication").filter(".publication").css("display", "none");
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val);
						$(".publication").filter("."+obj.val).css("display", "block");
						
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});