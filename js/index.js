var categories = document.querySelector('.categories_menu');
categories.addEventListener('click', function(){
	var categories_list = document.querySelector('.categories_menu ul');
	if(categories_list.style.height == '0px'){
		var h = 41*categories_list.childElementCount;
		categories_list.style.height = h + 'px';
	}
	else {
		categories_list.style.height = '0';
	}
})

// SignIn-SignUp
function Login_toggle(){
	var contain = document.querySelector('section .contain');
	var section = document.querySelector('section');
	contain.classList.toggle('active');
	section.classList.toggle('active');
}