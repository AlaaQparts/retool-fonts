import { jsPDF } from "jspdf"
var font = 'undefined';
var callAddFont = function () {
this.addFileToVFS('Lora-normal.ttf', font);
this.addFont('Lora-normal.ttf', 'Lora', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])
