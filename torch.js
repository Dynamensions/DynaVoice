module.exports = async (kernel) => {
  return {
    run: [
      {
        method: "python.install",
        params: {
          venv: "env",
          packages: [
            "torch",
            "torchaudio",
            "torchvision"
          ]
        }
      },
      {
        method: "log",
        params: { message: "Torch installation complete." }
      }
    ]
  }
}
