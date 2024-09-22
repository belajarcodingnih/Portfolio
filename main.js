function toggleDetail (e) {
    const target = $(e.target)
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

if ($(target).hasClass("active")) {
    $(target).html ("More Info").removeClass("active")
} else {
    $(target).html("less info").addClass("active")
}

$(detail).slideToggle()

}

function onFormSubmit (e) {
    e.preventDefault()
    const email = $("#input_email")
    const subject = $ ("#input_subject")
    const massage = $ ("#input_massage")

    if (!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(massage).val()) {
        alert("Massage is required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(massage).val("")
        alert("Form submitted!")
    }
}
