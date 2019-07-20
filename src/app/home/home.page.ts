import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GoogleCloudVisionService } from '../providers/google-cloud-vision.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // image from camera
  image: string = null;

  // labels results from GCPVision
  results: Object;

  constructor(
    private camera: Camera,
    private GCPVision: GoogleCloudVisionService,
    public loadingController: LoadingController
  ) { }

  async presentLoading() {
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present();
    });
  }


  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  takePhoto(useAlbum?: boolean) {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      ...useAlbum ? { sourceType: this.camera.PictureSourceType.PHOTOLIBRARY } : {}
    };

    this.camera.getPicture(options).then((imageData) => {
      this.presentLoading();
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.GCPVision.getLabels(imageData).subscribe((result) => {
        this.results = result;
        this.dismissLoading();
      }, err => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
}
