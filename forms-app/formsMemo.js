/*
A FormControl represents a single input field - it is the smallest unit of an Angular
form.
FormControls encapsulate the field’s value, and states such as being valid, dirty
(changed), or has errors.
*/
// create a new FormControl with the value "Nate"
let nameControl = new FormControl("Nate");
let name = nameControl.value; // -> Nate
// now we can query this control for certain values:
nameControl.errors // -> StringMap<string, any> of errors
nameControl.dirty // -> false
nameControl.valid // -> true
    // etc.