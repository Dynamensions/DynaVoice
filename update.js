module.exports = async (kernel) => {
  return {
    run: [
      {
        method: "git.pull",
        params: {}
      },
      {
        method: "log",
        params: { message: "DynaVoice updated." }
      }
    ]
  }
}
