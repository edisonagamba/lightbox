import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [];
  slideIndex = 0;
  constructor(public _imgService: ImagesService) {}

  ngOnInit() {
    this.cargarImagenes();
   }

cargarImagenes(){
  this._imgService.buscarImagenes().subscribe((resp:any)=>{
    console.log(resp);
    this.images = resp;
  });
}

openModal() {
  document.getElementById('imgModal').style.display = "block";
 }
 closeModal() {
  document.getElementById('imgModal').style.display = "none";
 }
 plusSlides(n) {
  this.showSlides(this.slideIndex += n);
 }
 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
 }
 showSlides(slideIndex);
 showSlides(n) {
  let i:any;
  const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf < HTMLElement > ;
  const dots = document.getElementsByClassName("images") as HTMLCollectionOf < HTMLElement > ;
  if (n > slides.length) {
   this.slideIndex = 1
  }
  if (n < 1) {
   this.slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex - 1].style.display = "block";
  if (dots && dots.length > 0) {
   dots[this.slideIndex - 1].className += " active";
  }
 }

}
