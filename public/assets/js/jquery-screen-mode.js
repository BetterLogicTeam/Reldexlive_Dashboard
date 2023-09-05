
//(function (jQuery) {
//    "use strict";
//const urlParams = new URLSearchParams(window.location.search);
//let storageDark = sessionStorage.getItem('dark')
//const myParam = urlParams.get('dark');

//if (myParam !== null) {
//            if (myParam === 'true') {
//    changeMode('true');
//            } else {
//    changeMode('false');
//            }
//        } else {
//            if (storageDark === 'null') {
//    changeMode('false');
//            }
//        }
//storageDark = sessionStorage.getItem('dark')
//if (storageDark !== 'null') {
//            if (storageDark !== 'null') {
//    changeMode(storageDark)
//}
//        } else {
//            if ($('body').hasClass('dark')) {
//    changeMode('true');
//            } else {
//    changeMode('true');
//            }
//        }

//jQuery(document).on("change", '.change-mode input[type="checkbox"]', function (e) {
//            const dark = $(this).attr('data-active');
//if (dark === 'true') {
//    $(this).attr('data-active', 'false')
//} else {
//    $(this).attr('data-active', 'true')
//}
//changeMode(dark)
//        })
//function changeMode(dark) {
//            const body = jQuery('body')
//var today = new Date().getHours();
//            if (today >= 6 && today < 18) {
//    $('#dark-mode').prop('checked', false).attr('data-active', 'true');
//$('.light-logo').removeClass('d-none')
//$('.darkmode-logo').addClass('d-none')
//body.removeClass('dark')
//dark = false
//            } else {


//    $('#dark-mode').prop('checked', true).attr('data-active', 'false')
//                $('.darkmode-logo').removeClass('d-none')
//$('.light-logo').addClass('d-none')
//body.addClass('dark')
//dark = true
//            }
//updateSessionStorage(dark)
//const event = new CustomEvent("ChangeColorMode", {detail: {dark: dark } });
//document.dispatchEvent(event);
//        }
//function updateLocalStorage(dark) {
//    localStorage.setItem('dark', dark)
//}
//function updateSessionStorage(dark) {
//    sessionStorage.setItem('dark', dark)
//}

//    })(jQuery)
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark");
    }
else if (currentTheme == "light") {
    document.body.classList.toggle("light");
    }
btn.addEventListener("click", function () {
        if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
var theme = document.body.classList.contains("light")
? "light"
: "dark";
        }
else {
    document.body.classList.toggle("dark");
var theme = document.body.classList.contains("dark")
? "dark"
: "light";
        }
localStorage.setItem("theme", theme);
    });
