const checkRequest = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({error: "Body is not present"});
  } else if (!req.body.name){
    res.status(400).json({error: "Body is missing the name"});
  } else if (!req.body.brand){
    res.status(400).json({error: "Body is missing the brand"});
  } else if (!req.body.image_url){
    res.status(400).json({error: "Body is missing the image url"});
  } else if (!req.body.details){
    res.status(400).json({error: "Body is missing the details"});
  } else if (!req.body.size_in_oz){
    res.status(400).json({error: "Body is missing the size"});
  } else if (!req.body.type){
    res.status(400).json({error: "Body is missing the type"});
  } else {
    return next();
  }
}

const checkId = (req, res, next) => {
  if (!req.params.id || (typeof Number(req.params.id)) !== "number") {
    res.status(400).json({error: "Please enter a valid id"});
  } else {
    return next()
  }
}

module.exports = {
  checkRequest,
  checkId
}