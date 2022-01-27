import { Application } from "@hotwired/stimulus"

import HelloController from "./hello_controller"
import ClipboardController from "./clipboard_controller"
import ColorsController from "./colors_controller"
import TwitterInputController from './input_controller';

const application = Application.start()
Stimulus.register("hello", HelloController)
Stimulus.register("clipboard", ClipboardController)
Stimulus.register("color", ColorsControllers)
Stimulus.register("input", TwitterInputController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
