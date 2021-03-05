module.exports = ({
    name:"sign",
    aliases: ['singing'],
    code:`$title[**__Signing Complete__**]
    $description[$noMentionMessage have signed <@$mentioned[1]> Enjoy your team!]
    $giveRole[$mentioned[1];$getUserVar[Team;$authorID]]
    $onlyIf[$mentioned[1];❌ You need to mention someone to sign.]
    $onlyIf[$noMentionMessage!=;You need to provide a team.]
    $onlyForRoles[800505445549604904;807867032410390560;807866924095766549;❌ Must be an FO, HC and or an AC to Sign people.]
    `
    })