// ================= CRUD EXPLANATION ==================


// It takes the new plan the user sends.
// If saving to the database fails → show “something went wrong.”
// If saving works → show “successfully added.”
// CREATE → Make a new item and save to database
app.post("/create-item", (req, res) => {
    // user sends data in request body
    const new_reja = req.body.reja;

//  collection("plans") → go to the folder/table in MongoDB called plans. //

// insertOne({ reja: new_reja }) → put (save) one new document inside that folder. //Successfully added the log as Bal Manager
    // add that data into "plans" collection in MongoDB
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => { 
        if (err) {
            // if something goes wrong while saving
            res.end("something went wrong");
        } else {
            // if everything is fine
            res.end("successfully added");
        }
    });
});



// It takes all the saved plans from the database.
// If there’s an error → show “Something went wrong.”
// If it works → show the plans on the page.
// READ → Show all items from database when user goes "/"
app.get("/", function (req, res) {
    // find all documents in "plans" collection
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            // if error happens while reading
            req.end("Something went wrong");
        } else {
            // render (show) them inside "reja.ejs" view
            res.render("reja", { items: data });
        }
    });
});


// UPDATE → (not written yet)
// Example: usually we use app.post("/update-item", ...) 
// then use db.collection("plans").findOneAndUpdate() 
// to change an existing document.


// DELETE → (not written yet)
// Example: usually we use app.post("/delete-item", ...) 
// then use db.collection("plans").deleteOne() 
// to remove a document from the collection.
