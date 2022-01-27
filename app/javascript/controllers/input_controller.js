import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "source" ]

  onChange(event) {
    const className = event.target.value.trim().length ? 'create-tweet-button' : 'disabled-create-tweet-button'
    this.sourceTarget.className = className
  }
}
