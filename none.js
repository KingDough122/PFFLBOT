    module.exports = ({
        name:"none",
        aliases: ["remove"],
        code:`$title[**__Demotion Complete__**]
$description[I have Demoted <@$mentioned[1]> to " Regular Teammate " for the <@&$getUserVar[Team;$authorID]>]
$onlyIf[$mentioned[1]!=;❌ You need to mention someone to demote to  Regular Teammate.]
$takeRole[$mentioned[1];807867032410390560]
$onlyForRoles[800505445549604904;**❌ You must be an " FO | Franchise Owner " to use this command!**]
        `
        })