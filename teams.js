module.exports = ({
    name:"team",
    code:`$title[**__Registered__**]
    $description[**I have registered <@$mentioned[1]> to <@&$mentionedRoles[1]>.**]
    $setUserVar[Team;$mentionedRoles[1];$mentioned[1]]
    $onlyIf[$mentioned[1]!=;Correct Format: **!Team " @Member " RoleMention.**]
    $onlyIf[$mentionedRoles[1]!=;Mention a role to register this user to.]
    $onlyForRoles[807844359117471755;Must have ED Role to use this command.]`
    })