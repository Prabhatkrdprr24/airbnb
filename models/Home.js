const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(callback){
        Home.fetchAll(registeredHomes => {
            registeredHomes.push(this);
            const homeFilePath = path.join(rootDir, 'data', 'homes.json');
            fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
        });
    }

    static fetchAll(callback){
        const homeFilePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeFilePath, (err, fileContent) => {
            if(err){
                callback([]);
            }
            else{
                callback(JSON.parse(fileContent));
            }
        });
    }
};



