//Using of all keyword and looping by each 

describe('Use of all keyword', function() {
	function calc(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values) {
				if (values == c) {
					item.click();
				}
			})
		})
		element(by.id("gobutton")).click();

	}

	it('Locators', function() {
		browser.get("http://juliemr.github.io/protractor-demo/");
		calc(2, 3, "MULTIPLICATION");
		calc(6, 2, "DIVISION");
		calc(7, 2, "SUBTRACTION");
		calc(4, 5, "ADDITION");

		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log(text);
							})
				})

	})
})