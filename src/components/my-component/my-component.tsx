import { Component,Prop,Listen} from '@stencil/core';
import {State} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  
  @State() public statePicker:boolean;
  @Prop({mutable:true,reflectToAttr: true}) day:string;
  @Prop({mutable:true}) month:string;
  @Prop({mutable:true}) year:string;
 
  componentWillLoad(){
    let now= new Date();
    this.day= ""+now.getDate();
    this.month=""+now.getMonth();
    this.year=""+now.getFullYear();
    this.statePicker=true;
}

  showPicker() {
    this.statePicker=!this.statePicker;
  }
  
  updateDate(d:string,m:string,y:string){
    this.day=d;
    this.month=m;
    this.year=y;  
  }

  @Listen('completed')
  coompletedEvent(ev:CustomEvent){
    this.day=ev.detail[0];
    this.month=ev.detail[1];
    this.year=ev.detail[2];  
    this.statePicker=!this.statePicker;

  }

  render() {
    if(this.statePicker){
      return( <button-p onClick={()=>this.showPicker()} day={this.day} month={this.month} year={this.year}></button-p> )
    }else{
      return( 
        <div>
          <button-p  onClick={()=>this.showPicker()}  day={this.day} month={this.month} year={this.year}></button-p>

          <panel-p day={this.day} month={this.month} year={this.year}></panel-p> 
      </div>
      )
    } 
  }
}
