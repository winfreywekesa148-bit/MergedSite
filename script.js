// function of merge
function combineUsers(...args) {
    return Object.assign({}, ...args)

    args. forEach((combineUsers)) => {
        console.log(combineUsers)
    }

}

// merge arrays
const combineUsers = args.flat();

// get today date
const today = new Date().toString('M/d/yyyy')
const combinedObject = {
    user: combineUsers
};

combinedObject.merge_date = today;

console.log(combinedObject);
