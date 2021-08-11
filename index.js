let a=[1,2,3,4,5,6,7,8,9];

//a). Print odd numbers in an array

let oddNum= a.filter((value)=> value%2 !==0);
   console.log("Odd Numbers are: " + oddNum)

//b).Convert all the strings to title caps in a string array

let str=['abc','def','ghi','jkl']
console.log(str.map((value)=>{ return value.toUpperCase()}));

//c)Sum of all numbers in an array

let sum = a.reduce((count,value)=>count+value);
console.log(sum);
//d)	Return all the prime numbers in an array

let prime = a.filter((value)=> {for(let i=2;i<value;i++)
{
    if(value% i === 0)
    {
        return false;
    }
}
    return true;})

console.log("Prime numbers are: "+ prime);

//e)	Return all the palindromes in an array

let palArr = ['i','madam','hello']
	
	let pal= palArr.filter((value)=>{
	    
	    let bool=value+"";
	        if(bool.split('').reverse().join('')===value+"")
	        {
	            return true;
	        }
	        
	        return false;
	    })
console.log("Palindrom Strings are: "+ pal)

