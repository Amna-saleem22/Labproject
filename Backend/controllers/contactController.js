// controllers/contactController.js
import Contact from "../models/Contact.js";  // Note .js extension

export const createContact = async (req, res) => {
  try {
    const { namelast, email, number, message } = req.body;

    if (!namelast || !email || !number || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    await Contact.create({ namelast, email, number, message });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully"
    });

  } catch (error) {
    console.error("Contact creation error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// Export other functions if needed
export const getAllContacts = async (req, res) => {
  // Your code here
};