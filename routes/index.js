
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Iron Yard Chat App', ngApp: 'chatApp' });
};
