/**
 * @author Jason Kastrup
 * WPF Conditionals Assignment
 * 3/18/2014
 */

var budget = 100;
var iPhonePrice = 199.99;
var wonLotto = true;

// If the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLotto){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
}
