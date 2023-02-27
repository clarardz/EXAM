import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';



interface Image {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  
  fotosGatos: { imgs: Image[] } = {
    "imgs": [
      {
        "name": "gato1",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat1.jpeg?alt=media&token=17279144-104a-4dac-ba56-6e32eaa0ad56"
        
      },
      {
        "name": "gato2",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat2.png?alt=media&token=d3c3637e-be28-47a3-a0e5-bc39f8b66dd5"
  
      },
      {
        "name": "gato3",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat3.jpeg?alt=media&token=ba96274a-f068-48f0-b725-23dea9d5a335"
       
      },
      {
        "name": "gato4",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat4.jpeg?alt=media&token=fb380056-c9ad-403d-86d4-7e0b72714922"
       
      },
      {
        "name": "gato5",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat5.jpeg?alt=media&token=f147471c-84cf-45b1-b339-d854baa5e2e2"
       
      },
      {
        "name": "gato6",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat6.avif?alt=media&token=66fcff72-2226-4ce3-a4c0-08df24ebd083"
       
      },
      {
        "name": "gato7",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/cat7.jpeg?alt=media&token=ff79dbb9-7bb8-417e-9849-1e6a0793e7e2"
       
      }, {
        "name": "test1",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/mujer1.webp?alt=media&token=52744997-9c9c-45ac-b9d3-1bf94f4a5fef"
       },
       {
        "name": "test2",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/hombre1.webp?alt=media&token=671eb083-02f7-45b2-a0c8-924ab5a19092"
       },
       {
        "name": "test3",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/exam-m-90767.appspot.com/o/mujer2.jpeg?alt=media&token=d085c3d9-12cd-4df9-bef1-a5cb7ec697bd"
       }
    ]
    };

  constructor(public infoService: InfoPaginaService) {}
}
