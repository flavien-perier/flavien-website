"use strict";

function loadController(name) {
    return new Controller(`${name}s`, `app/model/${name}s.json`, `app/view/${name}.html`, `${name}s-view`);
}

function filterCompetences(competenceType) {
    $(`#checkbox-${competenceType}`).click( function() {
        if( !$(this).is(":checked") ) {
            $(`.type-${competenceType}`).css("display", "none");
        } else {
            $(`.type-${competenceType}`).css("display", "");
        }
    });
}

$(function() {
    // controller initialisation
    const experience = loadController("experience");
    const competenceType = loadController("competenceType");
    const competence = loadController("competence");

    // competeneces progress bar initialisation
    experience.load();
    competenceType.load().then(() => {
        // competences filter
        ["framework", "language", "db", "os", "network"]
            .forEach(competence => filterCompetences(competence));
    });
    competence.load().then(() => {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow")
            }, 2000);
        });
    });

    // bot chat
    $("#chat-button").click(() => {
        $("#bot-chat").toggle("slow");
    });

    // category deflection
    $(".page-scroll a").bind("click", function(event) {
        $("html, body")
            .stop()
            .animate({
                scrollTop: $($(this).attr("href")).offset().top
            },
            1000,
            "easeInOutExpo"
            );
        event.preventDefault();
    });
});