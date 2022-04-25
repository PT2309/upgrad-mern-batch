const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/oneToManyDb', () => {
    console.log('Connected to MongoDb Environment');   
});

const Tutorial = require('./models/Tutorial');

const createTutorial = function(tutorial){
    return Tutorial
            .create(tutorial)   
            .then( createdData => {
                console.log('Data Created in DB', createdData);
                return createdData;
            })
    }

const createImages = function(tutorialId, image){
    return Tutorial.findByIdAndUpdate(tutorialId, {
        $push: {
            images: {
                caption: image.caption,
                url: image.url
            }
        }
    }, {new: true})
}

const run = async function(){

    let tutorial = await createTutorial({
        title: 'How to sleep with eyes open',
        author: 'James Potter'
    })

    tutorial = await createImages( tutorial._id, {
        path: 'sites/upload/image1.png',
        url: '/upload/image1.png',
        caption: 'My Image no. 1',
        createdAt: Date.now()
    })

    tutorial = await createImages( tutorial._id, {
        path: 'sites/upload/image2.png',
        url: '/upload/image2.png',
        caption: 'My Image no. 2',
        createdAt: Date.now()
    })
    console.log('Images Updated in the Db');
}

run();