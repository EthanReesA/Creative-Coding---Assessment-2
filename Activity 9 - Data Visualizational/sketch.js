let table;

//Setting Text
var word = "Note: Each 10 is a Thousand since the graph can't handle the large number";

//Preloading the Sheet
function preload(){
  table = loadTable('wolfpopluation.csv','csv', 'header')
}

//Making the Bar Graph
function setup() {
  createCanvas(800, 300);
  background(100);
  
  let barWidth = 100;
  
  for(let i = 0; i < table.getRowCount(); i++){
    let country = table.getString(i, 'Country');
    let population = table.getNum(i, 'Wolf Population');
    
    let x = 30 + i * (barWidth + 20);
    let h = map(population, 0, 100, 0, height);
    
    //Bar
    fill(0);
    rect(x, height - h, barWidth, h);
    
    
    //Text within the Bar
    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(country, x + barWidth / 2, height - 20);
    text(population, x + barWidth / 2, height - 50);
    
    //Text
    text(word,210,10)
  }
}