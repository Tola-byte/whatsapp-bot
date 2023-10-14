
exports.handleIncomingResponse = (req: any, res: any) => {
    const { body } = req.body;
    // add logic here

    
    const response = `You sent: ${body}`;
    res.json({ message: response });
  };
  