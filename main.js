function toggleDetail (e) {
    const target = $(e.target)
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

$(detail).slideToggle()


if ($(target).hasClass("active")) {
    $(target).html ("More Info").removeClass("active")
} else {
    $(target).html("less info").addClass("active")
}
}