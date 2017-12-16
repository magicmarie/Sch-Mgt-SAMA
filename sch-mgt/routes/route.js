const express = require('express');
const router = express.Router();
const schoolSchema = require('../models/school');


router.post('/createSchool', function (req, res) {
    console.log(req.body);
    var school = new schoolSchema({
        'communityUnit': req.body.communityUnit,
        'schoolId': req.body.schoolId,
        'name': req.body.schoolName,
        'oLevel': req.body.oLevel,
        'aLevel': req.body.aLevel,
        'boarding': req.body.boarding,
        'day': req.body.day,
        'female': req.body.isFemale,
        'male': req.body.isMale,
        'no_students': req.body.no_students
    });
    school.save(function (err, school) {
        if (err) {
            res.json({ "success": err });
        } else {
            res.json({ "success": true, "result": school });
        }
    });


});

router.get('/getSchools', function (req, res) {
    schoolSchema.find(function (err, schools) {
        if (err) {
            res.json({ "success": false });
        } else {
            res.json({ "success": true, "results": schools });
        }
    })
});

router.get('/o_a_ratio', function (req, res) {

    schoolSchema.find({ 'oLevel': true }, function (err, oSchools) {
        if (err) {
            res.json({ "success": false });
        } else {
            schoolSchema.find({ 'oLevel': true, 'aLevel': true }, function (err, o_aSchools) {
                if (err) {
                    res.json({ "success": false });
                } else {
                    res.json({ "success": true, "o": oSchools, "o_a": o_aSchools });
                }

            });

        }
    });

});


module.exports = router;