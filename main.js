var casper = require("casper").create();
casper.echo("Hello world", "WARNING");
//console.log("hello world");
// casper.start('https://www.google.co.in/',function(){
// 	this.capture('./output/test.png');
// 	});
// casper.thenOpen('http://phantomjs.org/',function(){
// 	this.capture('./output/test2.png');
// 	});
casper.on('remote.message' , function(msg){
	casper.echo('Remote message is : ' + msg);
})

// casper.start('https://www.google.co.in/',function(){
// 	var message= " The current page title is: ";
//  	var title = this.evaluate(function(message){
//  		var title =document.title;
//  		return message + title;
//  		},message);
//  	casper.echo(title);
//  	});


casper.start('https://www.google.co.in/',function(){
	this.fill('form',{q:'hello world'},true);
	});
//it will wait for 1 sec and then run the function in case of internet connection is slow but its not scalanle 
//casper.wait(1000,function(){

//})
//it will wait for 1 sec and then run the function in case of internet connection is slow but its not scalanle 
//casper.waitForSelector(1000,function(){

//})
casper.then(function(){
 	this.capture('./output/test3.png');
 	});
casper.run()
//casper.exit();