module.exports = ({
    name:"ac",
    code:`$title[**__Demotion Complete__**]
    $description[I have Demoted <@$mentioned[1]> to " Assistant Coach " for the <@&$getUserVar[Team;$authorID]>]
    $onlyIf[$mentioned[1]!=;❌ You need to mention someone to demote to  AC.]
    $giveRole[$mentioned[1];807867032410390560]
    $takeRole[$mentioned[1];807866924095766549]
    $onlyForRoles[800505445549604904;**❌ You must be an " FO | Franchise Owner " to use this command!**]
    `
    })