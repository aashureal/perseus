// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    // Validate required fields
    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // Create new user
    const newUser = new User({
      email,
      fullName: {
        firstName,
        lastName
      },
      password
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        email: newUser.email,
        fullName: newUser.fullName
      }
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Login a user
exports.loginUser = (req, res) => {};
