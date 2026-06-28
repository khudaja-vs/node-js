function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = {
    addfn: add,
    subfn: sub,
} ;

//anomiouse funtion --> no name add&sub is just ike a property
// exports.add=(a,b) =>a+b;
// exports.sub=(a,b) => a-b;