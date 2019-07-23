describe('test suit',function(){
	function selectItem(product){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text==product){
					item.element(by.tagName("button")).click();
				}
			})
		})
	}
	
	it('test case',function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("Sasitha");
		element(by.css("input[name='email']")).sendKeys("hbsasithadilshan@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("Sasitha123");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();//.get(0) also correct
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success ']")).getText().then(function(text){
				console.log(text);
			})
		})
		
		element(by.name("name")).clear().sendKeys("a").then(function(){
			element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
				console.log(text);
			})
		})
		
		element(by.linkText("Shop")).click();
		
		selectItem("iphone X");
		selectItem("Samsung Note 8");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			var res=text.split("(");
			var x=res[1].trim().charAt(0)
			expect(x).toBe("2");
		})
		
		element(by.partialLinkText("Checkout")).click();
		
		element.all(by.tagName("tr")).each(function(item){
			item.element(by.css("td:nth-child(4)")).element(by.tagName("strong")).getText().then(function(text){
				var tx=text.split(" ");
				var ty=tx[1];
				console.log(ty);
			})
		})
		
		
		
		
		
	})
})