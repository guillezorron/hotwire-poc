import { Application } from "@hotwired/stimulus"

import HelloController from "./hello_controller"


const application = Application.start()
Stimulus.register("hello", HelloController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
