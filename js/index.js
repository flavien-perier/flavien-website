"use strict";

import "bootstrap";

import Controller from "./Controller";
import { geneticLoader } from "./genetic";

function loadController(name) {
    return new Controller(`${name}s`, `app/model/${name}s.json`, `app/view/${name}.html`, `${name}s-view`);
}

function filterCompetences(competenceType) {
    const checkbox = document.getElementById(`checkbox-${competenceType}`);
    var competenceStatus = true;
    function checkOrUncheckCompetence() {
        checkbox.checked = !competenceStatus;
        for (const competence of document.getElementsByClassName(`type-${competenceType}`)) {
            competence.style.display = competenceStatus ? "none" : "";
        }
        competenceStatus = !competenceStatus;
    }
    document.getElementById(`competence-${competenceType}`).onclick = checkOrUncheckCompetence;
}

console.log(`
_______ _       _______        ________________ _       
(  ____ ( \\     (  ___  |\\     /\\__   __(  ____ ( (    /|
| (    \\| (     | (   ) | )   ( |  ) (  | (    \\|  \\  ( |
| (__   | |     | (___) | |   | |  | |  | (__   |   \\ | |
|  __)  | |     |  ___  ( (   ) )  | |  |  __)  | (\\ \\) |
| (     | |     | (   ) |\\ \\_/ /   | |  | (     | | \\   |
| )     | (____/| )   ( | \\   / ___) (__| (____/| )  \\  |
|/      (_______|/     \\|  \\_/  \\_______(_______|/    )_)
`);

loadController("competenceType").load().then(model => {
    model.competenceTypes.map(m => m.id)
        .forEach(competence => filterCompetences(competence));
});
loadController("competence").load();
loadController("experience").load();

document.getElementById("chat-button").onclick = function() {
    let botChat = document.getElementById("bot-chat");
    botChat.style.display = (botChat.style.display == "none" ? "" : "none");
};

geneticLoader();
window.addEventListener("resize", () => geneticLoader());
