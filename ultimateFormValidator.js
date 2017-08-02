function validateForm(form) {
    var formValid = true;
    var formGroups = form.find('.form-group');

    //Iterate each form group
    for (var i = 0; i < formGroups.length; i++) {
        var currentformGroup = $(formGroups[i]);

        //Validate using rules
        var currentFormGroupValid = validateTextBoxes(currentformGroup)
            && validateRadioButtons(currentformGroup)
            && validateCheckboxes(currentformGroup)
            && validateDropdown(currentformGroup);

        //Update display
        currentformGroup.toggleClass('has-error', !currentFormGroupValid);

        if (!currentFormGroupValid)
            formValid = false;
    }

    console.log('Form requirements: ' + (formValid ? 'Valid' : 'Invalid'));

    return formValid;

    //Textbox rules
    function validateTextBoxes(formGroup) {
        var textBoxes = formGroup.find('input[data-pattern]:visible:not([disabled]), textarea[data-pattern]:visible:not([disabled])');

        for (var i = 0; i < textBoxes.length; i++) {
            var textBox = $(textBoxes[i]);
            var value = textBox.val();
            var requiredPattern = textBox.data('pattern');

            if (!(new RegExp(requiredPattern).test(value)))
                return false;
        }

        return true;
    }

    //Radio button rules
    function validateRadioButtons(formGroup) {
        if (formGroup.find('input:radio:visible:not([disabled])').length)
            if (!formGroup.find('input:radio:visible:not([disabled]):checked').length)
                return false;

        return true;
    }

    //Checkbox rules
    function validateCheckboxes(formGroup) {
        if (formGroup.find('input:checkbox:visible[data-required]:not([disabled], :checked)').length)
            return false;

        return true;
    }

    //Dropdown rules
    function validateDropdown(formGroup) {
        var dropDowns = formGroup.find('select:visible:not([disabled])');

        for (var i = 0; i < dropDowns.length; i++) {
            var dropDown = $(dropDowns[i]);
            var value = dropDown.val();

            if (!value)
                return false;
        }

        return true;
    }
}

function toggleSubmitButton(form, enabled) {
	var button = form.find('button:submit');
	
	if (enabled) {
        button.attr('disabled', 'disabled');
    } else {
        button.removeAttr('disabled');
	}
}