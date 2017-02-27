//business logic
function Contact(first, last) {
    this.firstName = first;
    this.secondName = last;
}

//user interface logic
$document.ready(function){
    $("form#new-contact").submit((function) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        
    }
}
