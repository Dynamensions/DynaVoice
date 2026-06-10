import gradio as gr

def launch_ui(fn):
    with gr.Blocks() as demo:
        gr.Markdown("# DynaVoice")
        inp = gr.Textbox(label="Input")
        out = gr.Audio(label="Output")
        btn = gr.Button("Run")
        btn.click(fn, inp, out)
    demo.launch()
