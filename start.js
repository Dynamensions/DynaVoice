module.exports = async (kernel, args) => {
  const mode = args.menu || "tts"

  return {
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          path: "app",
          message: [
            `echo Starting DynaVoice in mode: ${mode}...`,
            `python server.py --mode ${mode}`
          ],
          on: [
            {
              event: "stdout",
              pattern: /(http:\/\/127\.0\.0\.1:\d+)/,
              action: async (match, kernel) => {
                await kernel.memory.setLocal(__filename, { url: match[1] })
              }
            }
          ]
        }
      }
    ]
  }
}
