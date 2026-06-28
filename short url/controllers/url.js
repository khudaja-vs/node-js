const {nanoid} = require('shortid');
const URL = require('../modules/url');
const shortid = require('shortid');

async function handleGenerateNewShortURL(req, res) {
    const bod = req.body;
    if(!body.url) return res.status(400).json({error: 'Missing url in request body'});
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    });
    return res.json({ Id: shortID});

}

module.exports = {
    handleGenerateNewShortURL
};