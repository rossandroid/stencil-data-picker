import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'button-p',
  styleUrl: 'button-p.css'
})
export class ButtonP {
  
  
    @Prop({mutable:true}) day:string;
    @Prop({mutable:true}) month:string;
    @Prop({mutable:true}) year:string;

  render() {
      return(    
      <div class="w3-button w3-green w3-block" >
        <span><strong> {this.day}  </strong>/</span>
        <span><strong> {this.month} </strong>/</span>
        <span><strong> {this.year} </strong></span>
      </div>
      )
  }
  
}
