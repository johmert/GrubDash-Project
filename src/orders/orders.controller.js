const path = require("path");
// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));
// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// Create & its middlware helper functions
const bodyHasDeliverTo = (req, res, next) => {
    const { data: { deliverTo } = {} } = req.body;
    if(!!deliverTo && deliverTo !== "") return next();
    next({
        status: 400,
        message: "Order must include a deliverTo."
    });
};
const bodyHasMobileNumber = (req, res, next) => {
    const { data: { mobileNumber } = {} } = req.body;
    if(!!mobileNumber && mobileNumber !== "") return next();
    next({
        status: 400,
        message: "Order must include a mobileNumber."
    });
};
const bodyHasDishes = (req, res, next) => {
    const { data: { dishes } = {} } = req.body;
    if(!!dishes) return next();
    next({
        status: 400,
        message: "Order must include a dish."
    });
};
const dishesPropertyIsValid = (req, res, next) => {
    const { data: { dishes } = {} } = req.body;
    if(Array.isArray(dishes) && dishes.length !== 0) return next();
    next({
        status: 400,
        message: "Order must include at least one dish."
    });
};
const dishesHaveQuantity = (req, res, next) => {
    const { data: { dishes } = {} } = req.body;
    for(let index = 0; index < dishes.length; index++){
        if(!dishes[index].quantity || dishes[index].quantity <= 0 || !Number.isInteger(dishes[index].quantity)){
            next({
                status: 400,
                message: `Dish ${index} must have a quantity that is an integer greater than 0.`,
            })
        }
    }
    next();
};

const create = (req, res, next) => {
    const { data: { deliverTo, mobileNumber, dishes } = {} } = req.body;
    const newOrder = {
        id: nextId(),
        deliverTo,
        mobileNumber,
        dishes,
        status: "pending"
    };
    orders.push(newOrder);
    res.status(201).json({ data: newOrder });
};

// TODO: destroy
const destroy = (req, res, next) => {

};

// List
const list = (req, res) => {
    res.json({ data: orders });
};

// TODO: read
const read = (req, res) => {

};

// TODO: update
const update = (req, res, next) => {

};

module.exports = {
    create: [
        bodyHasDeliverTo, 
        bodyHasMobileNumber,
        bodyHasDishes,
        dishesPropertyIsValid,
        dishesHaveQuantity,
        create
    ],
    destroy: [destroy],
    list,
    read: [read],
    update: [update],
}
