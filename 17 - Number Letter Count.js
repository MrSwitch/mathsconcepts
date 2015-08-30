//
// For the names of numbers, e.g. one, two, three, ... ninehundredandninetynine, onethousand
// Cound the number of characters for numbers ["one",..."onethousand"]
//
var a = ",one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(',');
a[20]="twenty",
a[30]='thirty',
a[40]='forty',
a[50]='fifty',
a[60]='sixty',
a[70]='seventy',
a[80]='eighty',
a[90]="ninety",
a[100]="hundred",
a[1000]="thousand";

var s = '';
for(var i=0;i<a.length;i++){

	if((i%10000)>=1000){
		s += a[((i%10000)+'')[0]] + a[1000];
		if(i%1000){
			s+="and";
		}
	}

	if((i%1000)>=100){
		s += a[((i%1000)+'')[0]] + a[100];
		if(i%100){
			s+="and";
		}
	}

	if(a[i%100]){
		s += a[i%100];
	}else{
		s += ( i%100>20 ? a[((i%100)+'')[0]*10] + (a[i%10]? "" + a[i%10]:'') : a[i%100] );
	}
	//s+=',';
}

s.length;