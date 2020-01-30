module.exports = (app) => {
    const custDiary = require('../controllers/custdiary.controller.js');
   // var multer  = require('multer');

    // Create a new Note
    app.post('/customer', custDiary.create);

    // Retrieve all Notes
   app.get('/getcustomer', custDiary.findAll);

    // Retrieve a single Note with noteId
  ///  app.get('/customer/:customerId', custDiary.findOne);

    //// Update a Note with noteId
   // app.put('/customer/:customerId', custDiary.update);

    // Delete a Note with noteId
    //app.delete('/customer/:customerId', custDiary.delete);
}