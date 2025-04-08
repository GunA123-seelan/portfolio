import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  list=['Front End Developer','Angular Developer'];
  display='';
  currentWord:any;
  val:number=0;
  letterIndex:number=0;

  ngOnInit(): void {
    this.loadAr();
  }

  loadAr=()=>{
    this.currentWord=this.list[this.val];
    this.display='';
    this.letterIndex=0;

    const interval=setInterval(()=>{
      if(this.letterIndex<this.currentWord.length){
        this.display+=this.currentWord[this.letterIndex];
        this.letterIndex++;      
      }else{
        clearInterval(interval);
        setTimeout(()=>{
          this.val=(this.val+1) % this.list.length;
          this.loadAr();
        },1000)
      }
    },300)

  }
}
