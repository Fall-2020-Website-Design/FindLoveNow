
/**
 * @param {Object} data - Data from mtach table from user where requesterID = userID
 * @returns {Set} - Set of userIDs that the user has responsed to 
 */

const retrieveAddresseeID = (userID, data) => {
    let filterOutIDs = new Set([]);

    // adds the user requesting match in case it the user 
    // has the preferences it is looking for 
    filterOutIDs.add(parseInt(userID, 10));
    
    for (let index=0; index < data.length; index++) {
        // gets the addresseeID for each object in the array and add
        const id = data[index].dataValues.addresseeID
        if (!filterOutIDs.has(id)) {
            filterOutIDs.add(id);
        }
    }

    return filterOutIDs;
}

/**
 * @param {Object} profiles - Profiles that have the users preferences
 * @returns {Object} - Profile object that that the user never seen before
 */

const filterPotentialMatches = (IDs, profiles) => {

    for(let index=0; index < profiles.length; index++) {
        const id = profiles[index].dataValues.userID;

        if (!IDs.has(id)) {
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
const retrieveProfile = (userID, profiles, matches) => {
    let matchFound = true;
    const previousMatchesIDs = retrieveAddresseeID(userID, matches);
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

// const mapAddresseeIDToName = (data) => {
//     for(let i = 0; i < data.length; i++) {
        
//     }
// }

module.exports = {
    retrieveAddresseeID,
    filterPotentialMatches,
    retrieveProfile
} 