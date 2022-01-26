import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("connect message - hello from StimulusJS")
  }

  greet() {
    console.log("Hello, Stimulus!", this.element)
  }
}
