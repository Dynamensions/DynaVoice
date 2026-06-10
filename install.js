module.exports = {
  run: [
    //
    // 1. Clone DynaVoice repo if missing
    //
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/dynamensions/DynaVoice app"
        ]
      }
    },

    //
    // 2. Install Torch (GPU/CPU auto-detect)
    //
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",
          venv: "env"
        }
      }
    },

    //
    // 3. Install DynaVoice Python package
    //
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -e ."
        ]
      }
    },

    //
    // 4. Download required models from HuggingFace
    //    (You can add more here as needed)
    //
    {
      method: "hf.download",
      params: {
        path: "app",
        "_": [
          "dynamensions/DynaVoice-Core-Models"
        ],
        "local-dir": "models/DynaVoice-Core-Models"
      }
    }
  ]
}
