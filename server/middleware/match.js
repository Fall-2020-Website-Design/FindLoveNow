
/**
 * @param {Object} data - Data from mtach table from user where requesterID = userID
 * @returns {Set} - Set of userIDs that the user has responsed to 
 */

const retrieveAddresseeID = (data) => {
    let addresseeIDs = new Set([]);

    for (let index=0; index < data.length; index++) {
        // gets the addresseeID for each object in the array and add
        const userID = data[index].dataValues.addresseeID
        if (!addresseeIDs.has(userID)) {
            addresseeIDs.add(userID);
        }
    }

    return addresseeIDs;
}

/**
 * @param {Object} profiles - Profiles that have the users preferences
 * @returns {Object} - Profile object that that the user never seen before
 */

const filterPotentialMatches = (IDs, profiles) => {

    for(let index=0; index < profiles.length; index++) {
        const userID = profiles[index].dataValues.userID;
        if (!IDs.has(userID)) {
            return profiles[index];
        }
    }

    return { userID: 0 };
}

/**
 * @param {Array of Objects} profiles - Profiles that have the users preferences
 * @param {Array of Objects} matches - Profiles that have the users preferences
 * @returns {Object} - Profile that has the <userID> peferences
 */
const retrieveProfile = (profiles, matches) => {
    let matchFound = true;
    const previousMatchesIDs = retrieveAddresseeID(matches);
    const potentialMatch = filterPotentialMatches(previousMatchesIDs, profiles);
    
    if (potentialMatch.userID === 0) {
        matchFound = false;
    }

    const result = {
        found: matchFound,
        match: potentialMatch
    }
    
    return result;
}

module.exports = {
    retrieveAddresseeID,
    filterPotentialMatches,
    retrieveProfile
} 