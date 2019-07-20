# Google Cloud Vision With Ionic

[![N|Solid](https://res.cloudinary.com/dlvaangxn/image/upload/c_scale,w_150/v1563630297/unx-logo.png)](https://www.unxdigital.com/)

![CircleCI](https://circleci.com/gh/google/wikiloop-battlefield/tree/master.svg?style=svg) ![GitHub watchers](https://img.shields.io/github/watchers/unx-digital/ai-ionic-gcp.svg?label=Watch&style=social) ![GitHub forkers](https://img.shields.io/github/watchers/unx-digital/ai-ionic-gcp.svg?label=Fork&style=social) ![GitHub starers](https://img.shields.io/github/watchers/unx-digital/ai-ionic-gcp.svg?label=Star&style=social)

We're combining Google's Cloud Vision API with Ionic to create a native mobile app that can automatically label and tag images.
We are inspired by the application created by Jin Yang, in Silicon Valley show.

[![Silicon Valley: Season 4 Episode 4: Not Hotdog (HBO)](http://img.youtube.com/vi/pqTntG1RXSY/0.jpg)](http://www.youtube.com/watch?v=pqTntG1RXSY "Silicon Valley: Season 4 Episode 4: Not Hotdog (HBO)")

> Just a few years ago, this technology would have been unreachable by the average developer. You would need to train your own deep neural network on tens-of-thousands of images with massive amounts of computing power. Today, you can extract all sorts of data from images with the Cloud Vision API, such as facial detection, text extraction, landmark identification, and more.

Although the premise is silly, this app is no joke. We are implementing very powerful deep learning image analysis features that can be modified to perform highly useful tasks based on AI computer vision.


#### Simple Architecture
![N|Solid](https://res.cloudinary.com/dlvaangxn/image/upload/v1563632800/vision-simple-app.png)

#### Initial Setup

1. Create a new Google Cloud Platform project [here](https://console.cloud.google.com/getting-started)
2. The Cloud Vision API is not enabled by default. From the GCP console, navigate the the enable APIs and [enable the vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com/).
3. You should add into `environment.ts` file your own Google Cloud API KEY


#### Run

To run a local dev instance, which gives you hot reload and friendly instance:

```bash
ionic serve
``` 

#### Next Steps
There are a huge amount of potential for mobile app developers with the Cloud Vision API. There are many business applications that can be improved with AI vision analysis.

##### License
```
MIT License

Copyright (c) [2019] [UNX Digital]
```
