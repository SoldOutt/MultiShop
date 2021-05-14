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

//detail product
// images
var numImg =1;
var buttonNextImg = document.querySelector('.detail_product-img--next')
var buttonPrevImg = document.querySelector('.detail_product-img--prev')
var product_Img = document.querySelector('.detail_product-img img')
buttonNextImg.addEventListener('click', function(){
	numImg++;
	if(numImg>5)numImg=1;
	var srcImg = `img/product-${numImg}.jpg`
	product_Img.setAttribute('src', srcImg)

})
buttonPrevImg.addEventListener('click', function(){
	numImg--;
	if(numImg<1)numImg=5;
	var srcImg = `img/product-${numImg}.jpg`
	product_Img.setAttribute('src', srcImg)

})

// cart
var countProduct = document.querySelector('.product_cart input#number_of_product')
var buttonReduce = document.querySelector('.product_cart .product_reduce')
var buttonAdd = document.querySelector('.product_cart .product_add')
buttonReduce.addEventListener('click', function(){
	var numProduct =parseInt(countProduct.value);
	console.log(numProduct);
	if(!numProduct||numProduct<=0){
		numProduct=0;
		countProduct.value = numProduct
	}
	else {
		numProduct--
		countProduct.value = numProduct
	}
})
buttonAdd.addEventListener('click', function(){
	var numProduct =parseInt(countProduct.value);
	console.log(numProduct);
	if(!numProduct&&numProduct!=0){
		numProduct=0;
		countProduct.value = numProduct
	}
	else {
		numProduct++
		countProduct.value = numProduct
	}
})


// review
var reviewProduct = document.querySelectorAll('.product_review-cat ul li');
var reviewProduct_box = document.querySelectorAll('.product_review-tab>div');
var reviewProduct_num
console.log(reviewProduct_box);
reviewProduct.forEach(function(x){
	x.addEventListener('click', function(){
		var a = document.querySelector('.product_review-cat ul li.active');
		a.classList.remove('active')
		x.classList.add('active')
		reviewProduct_num = x.getAttribute('data-review')
		console.log(reviewProduct_num)
	})
})