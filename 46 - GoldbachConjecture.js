(function GoldbachConjecture(){
	var primes = [],i=1,j=0;
	while(i++<10000){
		if( i%2 && i!==1 ){
			var prime = true, g=0;
			for(j=0;j<primes.length;j++){
				if( i%primes[j] === 0 ){
					prime = false;
				}
			}
			if(prime){
				primes.push(i);
			}else {
				for(j=0;j<primes.length&&g!==i;j++){
					var k = 0;
					do{
						g = primes[j] + 2*Math.pow(++k,2);
						if(g===i){break;}
					}
					while(g<i);

					/*if(g===i){
						console.log( i + " = " + primes[j] + " + 2*Math.pow(" + k + ",2);" );
					}*/
				}
				if(g!==i){
					console.log("Crap "+i);
					return i;
				}
			}
		}
	}
})();
