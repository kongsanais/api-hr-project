const express = require('express')
const Applicant = require('../models/M_Applicant')
const router = new express.Router()
const formidable = require('formidable')

router.post('/applicant', (req, res) => {

    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => 
    {
      let result = await Applicant.save(fields);
      res.json(result);
    });

})

// Upload Image
uploadImage = async (files, doc) => {
    if (files.image != null) {

      var fileExtention = files.image.name.split(".")[1];
      doc.image = `${doc.id}.${fileExtention}`;
  
      var newpath = path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;    
  
      if (fs.exists(newpath)) {
        await fs.remove(newpath);
      }
  
      await fs.moveSync(files.image.path, newpath);
  
      // Update database
      let result = product.update(
        { image: doc.image },
        { where: { id: doc.id } }
      );
      
      return result;
    }
  };


module.exports = router