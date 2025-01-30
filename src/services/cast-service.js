import Cast from "../models/Cast.js";

export default {
    getAll(filter = {}) {
        // return Cast.find({_id: {$in: ids}}); - дърводелската
        let query = Cast.find({});

        if (filter.exclude) {
            query = query.find({_id: {$nin: filter.exclude}})
        }

        return query;

        return Cast.find({});
    },

    create(castData){
        return Cast.create(castData);
    },
}