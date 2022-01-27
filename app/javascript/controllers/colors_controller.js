import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="colors"
export default class extends Controller {
  static targets = ["heading", "button"]

  initialize() {
    this.index = 0
    this.colors = ['lightMode', 'darkMode']
    this.themes = ['light', 'dark']
  }

  change() {
    this.index ++ 
    this.index = this.index % 2
    let selected_theme = this.colors[this.index]
    let theme_name = this.themes[this.index]

    this.headingTarget.className = selected_theme
    this.buttonTarget.innerHTML = `Switch to ${theme_name}!`

  }
}