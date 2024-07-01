process.noDeprecation = true;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Result", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.error(err));

const studentSchema = new mongoose.Schema({
  name: String,
  ETCS401: String,
  ETCS403: String,
  ETEC405: String,
  ETCS413: String,
  ETCS423: String,
  ETCS451: String,
  ETCS453: String,
  ETCS457: String,
  ETCS459: String,
  ETCS461: String,
  ETEC463: String,
  enrollment: String,
});

const Student = mongoose.model("Student", studentSchema);

const getDocument = async () => {
  try {
    const result = await Student.find();
    console.log(result);
  } catch (error) {
    console.error("Error fetching documents:", error);
  } finally {
    // Close the connection after fetching data
    mongoose.connection.close();
  }
};

getDocument();
