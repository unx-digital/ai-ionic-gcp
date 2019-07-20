import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudVisionService {

  constructor(private http: HttpClient) { }

  // Setting Google Cloud Vision API URL
  readonly ROOT_URL = environment.baseURLCloudVision + environment.googleAPIKey;


  /* Get labels from an image
  * See more https://cloud.google.com/vision/docs/request
  */
  getLabels(base64Image) {
    const body = {
      requests: [
        {
          image: {
            content: base64Image
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 20
            }
          ]
        }
      ]
    };

    return this.http.post(this.ROOT_URL, body)
      .pipe(
        retry(3),
        catchError((e: Response) => throwError(e))
      );
  }
}
