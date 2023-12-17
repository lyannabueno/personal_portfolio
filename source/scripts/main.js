$(document).ready(function() {
    $("#phone").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            email: {
                email: true
            }
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(validador) {
            let incorrectFields = validador.numberOfInvalids();
            
            if (incorrectFields) {
                alert(`Complete the ${incorrectFields} missing fields`)
            }
        }
    })
})