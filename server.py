import argparse
from VibeVoice.vibevoice.ui.webui import launch_ui
from VibeVoice.vibevoice.pipelines.tts_pipeline import run_tts

parser = argparse.ArgumentParser()
parser.add_argument("--mode", type=str, default="tts")
args = parser.parse_args()

if __name__ == "__main__":
    # For now, we only run the official VibeVoice TTS UI
    demo = launch_ui(run_tts)

    # Launch the Gradio server (Pinokio will capture the URL)
    demo.launch(
        server_name="127.0.0.1",
        server_port=42003,
        share=False,
        prevent_thread_lock=False
    )
