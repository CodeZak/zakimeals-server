const mongoose = require("mongoose");
console.log(process.env.ATLAS_URI)
mongoose.connect(process.env.ATLAS_URI);
