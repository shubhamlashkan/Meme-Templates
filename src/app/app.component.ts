import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { APIService } from './api.service';
import { Meme } from './memeModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meme';
  allTemplate:Meme[]=[];
  topText='';
  bottomText='';
  constructor(private service:APIService) { }

  ngOnInit() {
    this.getTemplate();

  }

  getTemplate()
  {
    this.service.fetchAllTemplates().subscribe((result)=>{

      this.allTemplate = result.data.memes;

      this.createImageTag(this.allTemplate[0].url,this.allTemplate[0].width,this.allTemplate[0].height,this.allTemplate[0].name);

    })

  }

  onSelectTemplate(event:any)
  {
    var img = document.getElementById('Image 1');
    img.remove();
    var templatetext = event.target.value;
    for(var i=0;i<this.allTemplate.length;i++)
    {
      if(templatetext == this.allTemplate[i].name)
      {
        this.createImageTag(this.allTemplate[i].url,this.allTemplate[i].width,this.allTemplate[i].height,this.allTemplate[i].name);
        break;
      }
    }
  }


  createImageTag(url:any,width:any,height:any,name:any)
  {
    var imgDiv = document.getElementById('imgDiv');
    var img = document.createElement('img');
    img.src = url;
    img.height = 400;
    img.width = 500;
    img.id = 'Image 1';
    img.style.maxWidth = "100%";
    img.style.display = 'block';
    img.style.marginLeft = 'auto';
    img.style.marginRight ='auto';
    img.className = 'img-responsive';
    imgDiv.appendChild(img);
    //var downloadButton = document.getElementById('downloadButton');
    //downloadButton.setAttribute("href",url);
   var anchorTag = document.getElementById('downloadButton');
    anchorTag.setAttribute("href",url);


  }



}
