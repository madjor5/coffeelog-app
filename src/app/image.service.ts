import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class ImageService {

  constructor() { }

  uploadFile(file: File): string {
    console.log("uploadBlob", file);
    // let blob: Blob;
    // this._file2blob(file)
    //   .subscribe(
    //     retBlob => console.log("myBlob#", retBlob)
    //   );

    return "something";
  }


  private _file2blob(file: File): Observable<Blob>  {
    let _blob: Blob;
    let fr = new FileReader();

    fr.onload = (event: any) => {
      let base64 = event.target.result
      let img = base64.split(',')[1]
      _blob = new Blob([ window.atob(img) ], { type:file.type });
    };
    
    fr.readAsDataURL(file);
    return of(_blob);
  }


}
