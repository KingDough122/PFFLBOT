module.exports = ({
    name:"promote",
    aliases: ['promo'],
    code:`$title[**__Promotion Complete__**]
    $description[I have promoted <@$mentioned[1]> to " $noMentionMessage " for the <@&$getUserVar[Team;$authorID]>]
    $giveRole[$mentioned[1];$getUserVar[Team]]
    $onlyIf[$mentioned[1];❌ You need to mention someone to sign.]
    $onlyIf[$noMentionMessage!=;You need to provide a " RoleName ( AC or HC ) " to promote the user to.]
    $giveRole[$mentioned[1];$getServerVar[$noMentionMessage]]
    $onlyIfMessageContains[!promote @ Member AC HC;HC;AC;The command does not meet the requirements it must have 'AC' and or 'HC']
    $onlyForIDs[76193494345829580;❌ Command Coming Soon!]
    `
    })