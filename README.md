# UltimateFormValidator
Bootstrap 3 and jQuery-compatible basic form validator, utilizing has-error and submit enabling/disabling

## Example
```js
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

var form = $('#formId');

form.on('keyup paste', function() {
	delay(function() {
		var isValid = validateForm(form);

		toggleSubmitButton(form, isValid);
	}, 1000);
});

form.change(function() {
	delay(function() {
		var isValid = validateForm(form);

		toggleSubmitButton(form, isValid);
	}, 0);
});
```
