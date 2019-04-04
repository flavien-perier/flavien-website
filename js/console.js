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

console.log("\thelp() -> show all commandes");

function help() {
    console.log("\n\nHelp:");
    console.log("\thelp() -> show this message");
    console.log("\tclean() -> show wallpaper only");
}

function clean() {
    $("body>*").each(function() {
        if (!$(this).is("canvas")) {
            $(this).remove();
        }
    })
}