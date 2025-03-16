import Person from "../models/person.js";

export const register = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const existinPerson = await Person.findOne({ email });

    if (existinPerson) {
      return res.json({ success: false, message: "Person Already exist" });
    }

    const newPerson = new Person({
      name,
      email,
      age,
    });

    await newPerson.save();
    res.json({
      success: true,
      message: "Person Register Successfully.",
      user: newPerson,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Person Registing error",
      error: error.message,
    });
  }
};

export const getAllPerson = async (req, res) => {
  try {
    const users = await Person.find(); // get find all users in the database
    res.json({ success: true, users });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const UpdatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const updatePerson = await Person.findByIdAndUpdate(
      id,
      { name, age },
      { new: true, runValidators: true }
    );

    if (!updatePerson) {
      res.json({ success: false, message: "Person not found" });
    }
    res.json({
      success: true,
      message: "Person Update Successfully",
      user: updatePerson,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const DeletePseron = async (req, res) => {
    try {
        const {id} = req.params;
        
        const deleteperson = await Person.findByIdAndDelete(id);

        if(!deleteperson){
            res.json({success:false, message:"Person Not Fond"})
        }

        res.send({success:true, message:"Person deleted successfully", user: deleteperson})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}
