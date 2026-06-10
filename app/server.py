import argparse
from ui.webui import launch_ui
from pipelines.tts_pipeline import run_tts
from pipelines.rvc_pipeline import run_rvc
from pipelines.realtime_pipeline import run_realtime
from pipelines.style_pipeline import run_style

parser = argparse.ArgumentParser()
parser.add_argument("--mode", type=str, default="tts")
args = parser.parse_args()

if __name__ == "__main__":
    mode = args.mode

    if mode == "tts":
        launch_ui(run_tts)
    elif mode == "rvc":
        launch_ui(run_rvc)
    elif mode == "realtime":
        launch_ui(run_realtime)
    elif mode == "lab":
        launch_ui(run_style)
    else:
        raise ValueError(f"Unknown mode: {mode}")
