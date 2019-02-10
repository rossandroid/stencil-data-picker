import { Component, Prop } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'panel-p',
  styleUrl: 'panel-p.css',
})
export class PanelP {
  
  
    @Prop({mutable:true}) day:string;
    @Prop({mutable:true}) month:string;
    @Prop({mutable:true}) year:string;
    
    nday:number;
    nmonth:number;
    nyear:number;

    @Event() completed: EventEmitter;


    componentWillLoad(){
        this.nday=parseInt(this.day);
        this.nmonth=parseInt(this.month)-1;
        this.nyear=parseInt(this.year);
    }

    CDay(n: number) { 
        this.nday+=n;        
        this.checkDate();
        
    }
    CMonth(n: number) { 
        this.nmonth+=n;
        this.checkDate();

    }
    CYear(n: number) { 
        this.nyear+=n;
        this.checkDate();
    }

    checkDate(){
        let dd = new Date(this.nyear, this.nmonth, this.nday, 0, 0, 0, 0);
        this.nday=dd.getDate();
        this.nmonth=dd.getMonth();
        this.nyear=dd.getFullYear();
        this.updateProb();
    }

    updateProb(){
        this.day=""+this.nday;
        this.month=""+(this.nmonth+1);
        this.year=""+this.nyear;

    }

    confirm(){
        this.completed.emit([this.day,this.month,this.year]);
    }
  
  render() {
      return(
    <div class="pbox">
        <div class="w3-row w3-padding-16">
            <div class="w3-col s2 m2 l2">
                <button class="w3-button w3-orange w3-block" onClick={() => this.CDay(-1)} > <i class="fa fa-arrow-left"></i></button>
            </div>
        <div class="w3-col s8 m8 l8 w3-container w3-center">
        <strong>{this.day}</strong>
        </div>
        <div class="w3-col s2 m2 l2">
            <button class="w3-button w3-orange w3-block" onClick={() => this.CDay(1)} > <i class="fa fa-arrow-right"></i> </button>
        </div>
        </div>
        <div class="w3-row w3-padding-16">
            <div class="w3-col s2 m2 l2">
                <button class="w3-button w3-orange w3-block" onClick={() => this.CMonth(-1)} > <i class="fa fa-arrow-left"></i> </button>
            </div>
        <div class="w3-col s8 m8 l8 w3-container w3-center">
        <strong>{this.month}</strong>
        </div>
            <div class="w3-col s2 m2 l2">
                <button class="w3-button w3-orange w3-block" onClick={() => this.CMonth(1)}> <i class="fa fa-arrow-right"></i>  </button>
            </div>
        </div>
        <div class="w3-row w3-padding-16">
            <div class="w3-col s2 m2 l2">
                <button class="w3-button w3-orange w3-block" onClick={() => this.CYear(-1)}> <i class="fa fa-arrow-left"></i> </button>
            </div>
            <div class="w3-col s8 m8 l8 w3-container w3-center">
            <strong>   {this.year} </strong>
            </div>
        <div class="w3-col s2 m2 l2">
        <button class="w3-button w3-orange w3-block" onClick={() => this.CYear(1)}> <i class="fa fa-arrow-right"></i>  </button>
        </div>
        </div>
        <button class="w3-button w3-indigo w3-block" onClick={() => this.confirm()}> Confirm </button>
    </div>

      )
  }
  
}
