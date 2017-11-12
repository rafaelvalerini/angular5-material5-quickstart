import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  
  article : Article;
  articleForms : FormGroup;
  articles : Array<Article>;

  
  constructor( 
    private __articleService:ArticleService , 
    private router:Router, 
    private aR:ActivatedRoute,
    private fb:FormBuilder ) { }
  
    ngOnInit() {
      
      this.__articleService.getArticles().subscribe( res => this.articles = res );
      
      this.aR.params.subscribe((params)=>{
        
        if( params['id'] )
        {
            this.__articleService.getArticle(params['id']).subscribe( res => {
              this.article = res;
              this.articleForms = this.fb.group({
                  'title':[this.article['title'], Validators.compose([
                      Validators.required,
                      Validators.minLength(10),
                      Validators.maxLength(45)
                    ]
                  )],
                  'content':[this.article['content'], Validators.compose([
                      Validators.required,
                      Validators.minLength(10)
                    ]
                  )]
              });
            });
        }else{
            this.articleForms = this.fb.group({
                  'title':[null, Validators.compose([
                      Validators.required,
                      Validators.minLength(10),
                      Validators.maxLength(45)
                    ]
                  )],
                  'content':[null, Validators.compose([
                      Validators.required,
                      Validators.minLength(10)
                    ]
                  )]
              });
        }
      });
    }
    
    
    addArticle( article : Article , articleID  ){
     

      this.aR.params.subscribe((params)=>{
        
        if( params['id'] )
        {

           this.__articleService.updateArticle(article,params['id']).subscribe(updateArticle => {
          this.router.navigateByUrl('/');
        })

        }else{
            
          this.__articleService.insertArticle(article).subscribe(newArticle => {
          this.articles.push(newArticle);
          this.router.navigateByUrl('/');
        })

        }

      });
    }
}