import { LightningElement, track } from 'lwc';

export default class colorpicker extends LightningElement {

    @track name = '';
    @track color = '';
    @track cssClass; 
    @track backcolor = '';

    handleChange(event) {

        this.name = event.target.value;
    }

    handleColorChange(event){
        
        // stores pick list val
        this.color = event.target.value; 

        // changes background from above val
        this.backcolor = 'background-color:' + this.color;
        console.log('color: ' + this.color);
        // console.log('element: ' + document.getElementsById("pick-color")); 
        // eslint-disable-next-line @lwc/lwc/no-document-query
        // document.getElementById("pick-color").style.backgroundcolor(this.color);
        
        // console.log('element: ' + document.getElementsById("pick-color")); 
    }

}