module.exports = ({
    name:"pac",
    aliases: ["grant"],
    code:`$title[**__Promotion Complete__**]
    $description[I have promoted <@$mentioned[1]> to " Assistant Coach " for the <@&$getUserVar[Team;$authorID]>]
    $onlyIf[$mentioned[1]!=;❌ You need to mention someone to promote to  Hc.]
    $giveRole[$mentioned[1];807867032410390560]
    $onlyForRoles[800505445549604904;**❌ You must be an " FO | Franchise Owner " to use this command!**]
    `
    })