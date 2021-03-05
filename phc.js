module.exports = ({
    name:"phc",
    code:`$title[**__Promotion Complete__**]
    $description[I have promoted <@$mentioned[1]> to " Head Coach " for the <@&$getUserVar[Team;$authorID]>]
    $onlyIf[$mentioned[1]!=;❌ You need to mention someone to promote to  Hc.]
    $giveRole[$mentioned[1];807866924095766549]
    $onlyForRoles[800505445549604904;**❌ You must be an " FO | Franchise Owner " to use this command!**]
    `
    })