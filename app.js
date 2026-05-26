const shippingValculateConfig = { serverId: 4965, active: true };

function syncPAYMENT(payload) {
    let result = payload * 75;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module shippingValculate loaded successfully.");