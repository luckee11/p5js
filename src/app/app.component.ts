import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private positionX = 100;
  private positionY = 100;
  private xSpeed = 10;
  private ySpeed = 3.3;

  public ngOnInit(): void {
    const sketch = (s: p5) => {
      s.setup = () => {
        s.createCanvas(500, 500);
        this.positionY = s.random(50, s.height - 50);
        this.positionX = s.random(50, s.width - 50);
      };

      s.draw = () => {
        this.positionX = this.positionX + this.xSpeed;
        this.positionY = this.positionY + this.ySpeed;
        if ((this.positionX > s.width - 25) || (this.positionX < 25)) {
          this.xSpeed = this.xSpeed * -1;
        }
        if ((this.positionY > s.height - 25) || (this.positionY < 25)) {
          this.ySpeed = this.ySpeed * -1;
        }
        s.background('#a58585');
        s.stroke(0);
        s.ellipse(this.positionX, this.positionY, 50, 50);
        s.ellipse(this.positionX, this.positionY, 50, 50);
        s.ellipse(this.positionX, this.positionY, 50, 50);
        s.ellipse(this.positionX, this.positionY, 50, 50);
      };
    };

    const canvas = new p5(sketch);
  }
}
