module.exports.checarLogin = function(req, res, next){
    const userId = req.session.userId;
    if(!userId){
        res.redirect('/')
    }
    next();
}