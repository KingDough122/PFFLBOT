module.exports = ({
    name:"offer",
    code:` $awaitReaction[$mentioned[1];1d;**New Offer**: <@$mentioned[1]> has been offered to " **$noMentionMessage** " ;✔,❌;Accepted,Declined;[$mentioned[1] did not respond in-time for the offer, Offer cancelled.;No]
    $onlyIf[$mentioned[1]!=$authorID;❌ Failed because you tried to Offer yourself, What a clown.]
    $onlyIf[$mentioned[1]!=;Correct Format: **!Offer " @Member " Team.**]
    $onlyIf[$noMentionMessage!=;Correct Format: **!Offer " @Member " Team.**] 
    $onlyForRoles[800505445549604904;807867032410390560;807866924095766549;❌ Must be an FO, HC and or an AC to Sign people.]`
    })

    
    