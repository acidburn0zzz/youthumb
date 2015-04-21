var youthumb = require("youtube-thumbnails");
var config 	 = require("../../config");
var isValid    = require("../services/validYoutubeId");

module.exports = function(app, express) {

	//create new router
	var apiRoutes = express.Router();

	// setup link yo link build api
	apiRoutes.get('/youthumb/:youtube_id', function(req, res) {

		//check if valid youtube id
		isValid(req.params.youtube_id, function(valid) {

			if (valid) {

				youthumb.all(req.params.youtube_id, function(thumbnails) {
					res.json(thumbnails);
				});

			}

			else {

				res.status(400).send("Error: not a valid youtube id");

			}

		});

	});

	return apiRoutes;
};