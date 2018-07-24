const sendJson = (req, res, next) => {
  res.Fail = (Code, Message, Data) => {
    return res.json({
      Code,
      Message,
      Data
    })
  }
  next()
}

export {
  sendJson
}