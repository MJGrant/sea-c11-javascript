//Returns the given name if only one of the two names actually has content.

function preferredName (FirstName, LastName) {
    return((!!FirstName === !!LastName)
        ? false 
        : FirstName || LastName);
};
