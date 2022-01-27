import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    console.log('we are liveeee')
  }

  greet(event) {
    event.preventDefault()
    debugger
    navigator.clipboard.writeText(this.sourceTarget.innerText);
  }
}
