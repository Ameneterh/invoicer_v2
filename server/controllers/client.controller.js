import Client from "../models/client.model.js";

// create user (signup)
export const addClient = async (req, res) => {
  const { client_name, client_email, client_phone, client_address, staff } =
    req.body;

  try {
    // check content from req.body
    if (!client_name || !client_email || !client_phone || !client_address) {
      throw new Error("All fields are required!");
    }

    // check if user already exists
    const clientAlreadyExists = await Client.findOne({ client_email });
    if (clientAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "Client Already Exists!" });
    }

    // save new business
    const client = new Client({
      client_name,
      client_email,
      client_phone,
      client_address,
      staff,
    });

    await client.save();

    res.status(201).json({
      success: true,
      message: "New Client Added Successfully",
      client,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get all registered clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(201).json({
      success: true,
      message: "Clients fetched successfully",
      clients,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get one registered client
export const getOneClient = async (req, res) => {
  const clientId = req.params.clientId;

  try {
    const client = await Client.findById({ _id: clientId });

    res.status(201).json({
      success: true,
      message: "Clients fetched successfully",
      client,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
