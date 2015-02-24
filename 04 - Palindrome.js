
// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

console.log((function palindrome(){

	var r=0,i,j;

	for(i=999;i-- >= 900;){

		for(j=i;j-->= 900;){
			x = ""+(i*j);

			if(x[0]===x[5] && x[1] === x[4] && x[2] === x[3]){
				if(x>=r){
					r = x;
					return x;
				}
			}
		}
	}

})());