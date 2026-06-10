module.exports = async (kernel) => {
  return {
    run: [
      {
        method: "fs.delete",
        params: { path: "env" }
      },
      {
        method: "log",
        params: { message: "Environment reset. Reinstall required." }
      }
    ]
  }
}
