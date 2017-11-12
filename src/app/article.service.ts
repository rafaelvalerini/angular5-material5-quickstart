import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Article } from './article';

@Injectable()
export class ArticleService {
  
  result : any;
  
  constructor( private __http:Http) { }
  
  getArticles(){
    return this.__http.get('http://localhost:3000/api/all')
            .map( result => this.result = result.json() );
  }
  
  getArticle(id){
    return this.__http.get('http://localhost:3000/api/articles/' + id)
            .map( result => this.result = result.json() );
  }

  insertArticle(post:Article){
    
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.__http.post('http://localhost:3000/api/create',JSON.stringify(post),options)
            .map( result => this.result = result.json() );
   }

   updateArticle(post:Article, id ){
    
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.__http.post('http://localhost:3000/api/update/' + id ,JSON.stringify(post),options)
            .map( result => this.result = result.json() );
   }
   
   deleteArticle(id){
    return this.__http.get('http://localhost:3000/api/delete/' + id)
            .map( result => this.result = result.json() );
  }

}
