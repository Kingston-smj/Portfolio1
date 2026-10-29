(function () {
    "use strict";

    var dialog = document.getElementById("project-dialog");
    var frame = dialog.querySelector(".dialog-media");
    var title = dialog.querySelector(".dialog-title");
    var close = dialog.querySelector(".dialog-close");

    var triggers = document.querySelectorAll(".project-trigger");
    Array.prototype.forEach.call(triggers, function (btn) {
        btn.addEventListener("click", function () {
            title.textContent = btn.getAttribute("data-project");
            frame.src = btn.getAttribute("data-animation");
            frame.alt = "Animated preview of " + btn.getAttribute("data-project");
            if (typeof dialog.showModal === "function") {
                dialog.showModal();
            } else {
                dialog.setAttribute("open", "");
            }
        });
    });

    close.addEventListener("click", function () {
        dialog.close();
    });

    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", function () {
        frame.src = "";
    });
})();
