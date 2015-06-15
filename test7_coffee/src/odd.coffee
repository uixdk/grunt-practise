odd = (num)-> 
	if typeof num is 'number'
		if num is Math.round num
			if num > 0
				num % 2 is 1;
			else
				throw "#{num}不是正数";
		else
			throw "#{num}不是整数";
	else
		console.log('tmdxxx');
		throw "#{num}不是数字";
	
odd('hello');
console.log(odd(1));
console.log(odd(2));
console.log(odd(1.5));
console.log(odd('hello'));