$(document).ready(function(){

    search_icon = $(".home-search-anchor");
    cancel_icon = $(".search-container .search-cont-cancel-icon");
    search_cont = $(".header .search-container");

    search_icon.on("click", function(e) {
        e.preventDefault();
        search_cont.addClass("active");
        cancel_icon.on("click", function() {
            search_cont.removeClass("active");
        });
    });

    user_edit_icon = $(".user-page .user .fa-pen");
    user_edit_cont   = $(".pop-cont.user-edit");
    user_edit_cancel = $(".pop-cont-inner .fa-times");
    change_pass_btn = $(".pop-cont-inner .field.submit .change_pass_btn");
    change_pass_field = $(".pop-cont-inner .field.password");

    user_edit_icon.on("click", function() {
        user_edit_cont.css("display", "grid");
        user_edit_cancel.on("click", function() {
            user_edit_cont.fadeOut("fast");
        });
    });

    change_pass_btn.on("click", function() {
        change_pass_field.toggleClass("active");
        if(change_pass_field.hasClass("active")) {
            $(this).html("Cancel");
        } else {
            $(this).html("Change Password");
        }
    });

});