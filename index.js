// Add your Circle class here

class Circle {
  constructor(raduis) {
    this.raduis = raduis
  }
  
  get diameter() {
    return this.raduis * 2
  }
  
  get circumference() {
    return this.raduis * 2 * Math.PI 
  }
  
  get area() {
    return Math.PI * this.raduis * this.raduis
  }
  
  set diameter(d) {
    this.raduis = d/2
  }
  
  set circumference(c) {
    this.raduis = c/(2*Math.PI)
  }
  
  set area(a) {
    this.raduis = Math.sqrt(a/Math.PI)
  }
}