 $(document).ready(function(){

	$('body').on('click', '.card-list li', function(){
		$(this).toggleClass('active');
	})

	$('body').on('click', '.control .add', function(){
		var val = Number($('.control input').val());
		changeInputSum(val + 1)
	})

	$('body').on('click', '.control .reduce', function(){
		var val = Number($('.control input').val());
		changeInputSum(val - 1)
	})

	$('body').on('input', '.control input', function(){
		var val = Number($('.control input').val());
		changeInputSum(val)
	})

	function changeInputSum(num) {
		if(num <= 0) return;
		
		var price = Number($('.order-product .r .now').text())
		var sum = (price * num).toFixed(2);
		$('.control input').val(num);
		$('.order-product .nums').text(num)
		$('.order-product .sums').text(sum)
		$('.bottom-sum .num span').text(sum)
	}

	$('body').on('click', '.pay-type', function(){
		$('.pay-type').removeClass('active');
		$(this).addClass('active')
	})

});
