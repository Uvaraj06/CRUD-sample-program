const crudmodel = require("../crudmodel/crudmodel");

// insert
exports.insert = (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: '0',
            message: "Fields Content can not be empty!"
        });
    } else {
        const crudmodel1 = new crudmodel({
            Username: req.body.Username,
            password: req.body.password,
            DOB: req.body.DOB
        });
        // console.log(crudmodel1);
        crudmodel.insert(crudmodel1, (err, data) => {
            // console.log(crudmodel1);
            // console.log(err);
            // console.log(data);
            if (!crudmodel1.Username) {
                res.json({ status: '0', message: 'Roll No not found' });
            } else if (err) {
                res.json({ status: '1', message: 'Error While inserting data' });
            } else if(data['sts'] == 1){
                
                res.json({ status: '1', message: 'Data Sent Successfully' });
        }
        });
    }
};

// update
exports.Update = (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: '0',
            message: "Fields Content can not be empty!"
        });
    } else {
        const crudmodel1 = new crudmodel({
        username: req.body.Username,
            password: req.body.password,
            DOB: req.body.DOB
        });

        crudmodel.Update(crudmodel, (err, data) => {
            if (!crudmodel1.Username) {
                res.json({ status: '0', message: 'Roll No not found' });
            } else if (err) {
                res.json({ status: '1', message: 'Error While inserting data' });
            } else if(data['sts'] == 1){   
                res.json({ status: '1', message: 'Data Updated Successfully' });
            }
        });
    }
};

// delete
exports.delete = (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: '0',
            message: "Fields Content can not be empty!"
        });
    } else {
        const crudmodel1 = new crudmodel({
        username: req.body.id,
         password: req.body.password,
        }); 
        crudmodel.delete(crudmodel1, (err, data) => {
            if (!crudmodel1.username) {
                res.json({ status: '0', message: 'Rollno not found' });
            } else if (err) {
                res.json({ status: '1', message: 'Error While inserting data' });
            } else if(data['sts'] == 1){
                
                res.json({ status: '1', message: 'Data Deleted Successfully' });
            }
        });
    }
};   

//  show
exports.show = (req, res) => {
    
        const crudmodel1 = new crudmodel({
            username: req.body.username,
         password: req.body.password,
        }); 
        crudmodel.show(crudmodel, (err, data) => {
            if (err) {
                res.json({ status: '1', message: 'Error While inserting data' });
            } else if(data['sts'] == 1){
                
                res.json({ status: '1', message: 'Data listed Successfully', listdata:data['data'] });
            }
        });
    
};















