const sendJson = (req, res, next) => {
  res.Back = (Code, Message, Data = null) => {
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