var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
app.use(session({secret: 'secrectApp'}));
var viewPath = path.join(__dirname, './views');

app.set('view engine', 'ejs');
app.set('views', viewPath);
app.use('/assets', express.static('assests'));
app.use('/assets/css', express.static(path.join(__dirname, './assets/css')));
app.use('/assets/images', express.static(path.join(__dirname, './assets/images')));
app.use('/assets/js', express.static(path.join(__dirname, './assets/js')));


const objectId = require('mongodb').ObjectID;
const collectionTree = 'tree';
const collectionDevices = 'devices';
const collectionCategory = 'categories';
const collectionbranches = 'foodlion_branches';
const collectionDemographics = 'Demographics';
const url = "mongodb+srv://admin:admin@final-project-94bn6.mongodb.net";
const dbNameOne = 'qtr1';
const dbNameTwo = 'qtr2';
const dbNameThree = 'qtr3';
const dbNameFour = 'qtr4';
const dbNameFive = 'Revenue';
const MongoClient = require('mongodb').MongoClient;


app.get('/', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameOne);

        dbo.collection(collectionCategory).find({}, {projection: {_id: 0}}).toArray(function (err, categories_result) {
            if (Object.values(categories_result).length) {
                allData.push(categories_result)
            }

            dbo.collection(collectionTree).find({}, {
                projection: {
                    _id: 0,
                    Channel_Group: 1,
                    Transactions: 1
                }
            }).toArray(function (err, tree_result) {
                if (err) throw err;
                allData.push(tree_result)


                dbo.collection(collectionDevices).find({}, {projection: {_id: 0}}).toArray(function (err, devices_result) {
                    if (Object.values(devices_result).length) {
                        allData.push(devices_result)
                    }

                    var demodbo = db.db(dbNameFive);
                    demodbo.collection(collectionDemographics).find(
                        {"qrt": "1"}, {
                        projection: {
                            Age: 1,
                            Revenue: 1,
                            Sessions: 1,
                            qrt: 1,
                            Quarter: 1,
                            _id: 0
                        }
                    })
                        .toArray(function (err, demo_result) {
                            if (Object.values(demo_result).length) {
                                allData.push(demo_result)
                            }

                            demodbo.collection("Revenue").find(
                                {"Quarter": "qrt1"}, {
                                    projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                                }).toArray(function (err, branch_result) {
                                if (err) throw err;
                                allData.push(branch_result)

                                let myNewArray = [].concat.apply([], allData);
                                res.render('class', {"msg": myNewArray});
                                db.close();
                            });
                        });
                });
            });
        });
    });
});

app.get('/one', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameOne);
        dbo.collection(collectionCategory).find({}, {projection: {_id: 0}}).toArray(function (err, categories_result) {
            if (Object.values(categories_result).length) {
                allData.push(categories_result)
            }

            dbo.collection(collectionTree).find({}, {
                projection: {
                    _id: 0,
                    Channel_Group: 1,
                    Transactions: 1
                }
            }).toArray(function (err, tree_result) {
                if (err) throw err;
                allData.push(tree_result)

                dbo.collection(collectionDevices).find({}, {
                    projection: {
                        _id: 0
                    }
                }).toArray(function (err, devices_result) {
                    if (Object.values(devices_result).length) {
                        allData.push(devices_result)
                    }

                    var demodbo = db.db(dbNameFive);
                    demodbo.collection(collectionDemographics).find(
                        {"qrt": "1"}, {
                            projection: {
                                Age: 1,
                                Revenue: 1,
                                Sessions: 1,
                                qrt: 1,
                                Quarter: 1,
                                _id: 0
                            }
                        })
                        .toArray(function (err, demo_result) {
                            if (Object.values(demo_result).length) {
                                allData.push(demo_result)
                            }

                            demodbo.collection("Revenue").find(
                                {"Quarter": "qrt1"}, {
                                    projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                                }).toArray(function (err, branch_result) {
                                if (err) throw err;
                                allData.push(branch_result)

                                let myNewArray = [].concat.apply([], allData);
                                res.render('one', {"msg": myNewArray});
                                db.close();
                            });
                        });
                });
            });
        });
    });
});

app.get('/two', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameTwo);
        dbo.collection(collectionCategory).find({}, {projection: {_id: 0}}).toArray(function (err, categories_result) {
            if (Object.values(categories_result).length) {
                allData.push(categories_result)
            }

            dbo.collection(collectionTree).find({}, {
                projection: {
                    _id: 0,
                    Channel_Group: 1,
                    Transactions: 1
                }
            }).toArray(function (err, tree_result) {
                if (err) throw err;
                allData.push(tree_result)

                dbo.collection(collectionDevices).find({}, {projection: {_id: 0}}).toArray(function (err, devices_result) {
                    if (Object.values(devices_result).length) {
                        allData.push(devices_result)
                    }
                    var demodbo = db.db(dbNameFive);
                    demodbo.collection(collectionDemographics).find(
                        {"qrt": "2"}, {
                            projection: {
                                Age: 1,
                                Revenue: 1,
                                Sessions: 1,
                                qrt: 1,
                                Quarter: 1,
                                _id: 0
                            }
                        })
                        .toArray(function (err, demo_result) {
                            if (Object.values(demo_result).length) {
                                allData.push(demo_result)
                            }

                            demodbo.collection("Revenue").find(
                                {"Quarter": "qrt2"}, {
                                    projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                                }).toArray(function (err, branch_result) {
                                if (err) throw err;
                                allData.push(branch_result)

                                let myNewArray = [].concat.apply([], allData);
                                res.render('two', {"msg": myNewArray});
                                db.close();
                            });
                        });
                });
            });
        });
    });
});

app.get('/three', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameThree);
        dbo.collection(collectionCategory).find({}, {projection: {_id: 0}}).toArray(function (err, categories_result) {
            if (Object.values(categories_result).length) {
                allData.push(categories_result)
            }

            dbo.collection(collectionTree).find({}, {
                projection: {
                    _id: 0,
                    Channel_Group: 1,
                    Transactions: 1
                }
            }).toArray(function (err, tree_result) {
                if (err) throw err;
                allData.push(tree_result)

                dbo.collection(collectionDevices).find({}, {projection: {_id: 0}}).toArray(function (err, devices_result) {
                    if (Object.values(devices_result).length) {
                        allData.push(devices_result)
                    }
                    var demodbo = db.db(dbNameFive);
                    demodbo.collection(collectionDemographics).find(
                        {"qrt": "3"}, {
                            projection: {
                                Age: 1,
                                Revenue: 1,
                                Sessions: 1,
                                qrt: 1,
                                Quarter: 1,
                                _id: 0
                            }
                        })
                        .toArray(function (err, demo_result) {
                            if (Object.values(demo_result).length) {
                                allData.push(demo_result)
                            }

                            demodbo.collection("Revenue").find(
                                {"Quarter": "qrt3"}, {
                                    projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                                }).toArray(function (err, branch_result) {
                                if (err) throw err;
                                allData.push(branch_result)

                                let myNewArray = [].concat.apply([], allData);
                                res.render('three', {"msg": myNewArray});
                                db.close();
                            });
                        });
                });
            });
        });
    });
});

app.get('/four', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameFour);
        dbo.collection(collectionCategory).find({}, {projection: {_id: 0}}).toArray(function (err, categories_result) {
            if (Object.values(categories_result).length) {
                allData.push(categories_result)
            }

            dbo.collection(collectionTree).find({}, {
                projection: {
                    _id: 0,
                    Channel_Group: 1,
                    Transactions: 1
                }
            }).toArray(function (err, tree_result) {
                if (err) throw err;
                allData.push(tree_result)

                dbo.collection(collectionDevices).find({}, {projection: {_id: 0}}).toArray(function (err, devices_result) {
                    if (Object.values(devices_result).length) {
                        allData.push(devices_result)
                    }
                    var demodbo = db.db(dbNameFive);
                    demodbo.collection(collectionDemographics).find(
                        {"qrt": "4"}, {
                            projection: {
                                Age: 1,
                                Revenue: 1,
                                Sessions: 1,
                                qrt: 1,
                                Quarter: 1,
                                _id: 0
                            }
                        })
                        .toArray(function (err, demo_result) {
                            if (Object.values(demo_result).length) {
                                allData.push(demo_result)
                            }

                            demodbo.collection("Revenue").find(
                                {"Quarter": "qrt4"}, {
                                projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                            }).toArray(function (err, branch_result) {
                                if (err) throw err;
                                allData.push(branch_result)

                                let myNewArray = [].concat.apply([], allData);
                                res.render('four', {"msg": myNewArray});
                                db.close();
                            });
                        });
                });
            });
        });
    });
});

app.get('/extra', function (req, res, next) {
    var allData = [];

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbNameFive);
        dbo.collection(collectionDemographics).find({}, {
            projection: {
                Age: 1,
                Revenue: 1,
                Sessions: 1,
                qrt: 1,
                Quarter: 1,
                _id: 0
            }
        })
            .toArray(function (err, demo_result) {
                if (Object.values(demo_result).length) {
                    allData.push(demo_result)
                }

                dbo.collection("Revenue").find({}, {
                    projection: {qrt: 1, Quarter: 1, Revenue: 1, Sessions: 1, Transactions: 1, _id: 0}
                }).toArray(function (err, branch_result) {
                    if (err) throw err;
                    allData.push(branch_result)
                    let myNewArray = [].concat.apply([], allData);
                    res.render('demographics', {"res": myNewArray});
                    db.close();
                });
            });
    });
});



app.listen(8080, function () {
    console.log('Server running...');
});

