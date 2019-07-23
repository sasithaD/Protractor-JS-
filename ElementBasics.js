describe('protractor element demo', function() {
	var using = require('jasmine-data-provider');
	var obj = require("./pageObjectsDemo.js");
	var obj2 = require("./data.js");
	
	
	
	beforeEach(function(){
		obj.getUrl();
	 	
	})
	
	//data stores actual data in the dataset
	//description stores the name of the sub objets
	//in every iteration each data set will be picked
	
	using(obj2.datadrive, function (datas, description) {
		it('testing calculaor functionality '+description, function() {
			
			obj.firstInput.sendKeys(datas.firstInput);
			obj.secondInput.sendKeys(datas.secondInput);
			obj.goButton.click();

			// jasmine assertion take care of resolving promises
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(datas.result);
			/*expect(element(by.css("h2[class='ng-binding']")).getText()).not
					.toBe("8");*/

			obj.result.getText().then(
					function(text) {
						console.log(text);
					})

		})

		
	})
	afterEach(function(){
		console.log("Spec is completed");
	})
	
	
})