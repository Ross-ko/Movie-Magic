import Cast from "../models/Cast.js";

export default {
    getAll(идс) {
        // return Cast.find({_id: {$in: ids}}); - дърводелската
        return Cast.find({});
    },

    create(castData){
        return Cast.create(castData);
    },
}