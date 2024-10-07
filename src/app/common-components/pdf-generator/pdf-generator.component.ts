import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pdf-generator',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.css'
})
export class PdfGeneratorComponent {
  @Input() headers : any;
  @Input() data : any;
  @Input() isDisable : any;
  ////////////////////////////////////// reference from https://pspdfkit.com/ begins here///////////////////////
  // npm install jspdf jspdf-autotable
  generatePDF() {
		// Create a new PDF document.
		const doc = new jsPDF();

		// Add content to the PDF.
		doc.setFontSize(16);
		doc.text('Fresh Mart', 10, 10);
		doc.setFontSize(12);
		doc.text(
			'Bill Receipt',
			10,
			20,
		);

		// Create a table using `jspdf-autotable`.
    // const headers = [['Name', 'Email', 'Country']];
		// const data = [
		// 	['David', 'david@example.com', 'Sweden'],
		// 	['Castille', 'castille@example.com', 'Spain'],
		// ];
		const headers = [this.headers];
		const data = this.data;
		autoTable(doc, {
			head: headers,
			body: data,
			startY: 30, // Adjust the `startY` position as needed.
		});

		// Save the PDF.
		doc.save('table.pdf');
	}
  ////////////////////////////////////// reference from https://pspdfkit.com/ ends here///////////////////////


  /////////////////////////////////refernce from chatGpt begins here////////////////////////////////
  // npm install jspdf html2canvas
  generatePDF1() {
    const dataTable = document.getElementById('dataTable');

    html2canvas(dataTable!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      const imgWidth = 190; // Adjust according to your requirement
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('table.pdf');
    });
  }
  /////////////////////////////////refernce from chatGpt ends here////////////////////////////////
}
