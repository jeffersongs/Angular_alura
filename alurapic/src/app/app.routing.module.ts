import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoListRsolver } from "./photos/photo-list/photo-list.resolver";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { SignInComponent } from "./home/signin/signin.component";

const routes: Routes = [
    { path: '', 
    component: SignInComponent 
    },
    { path: 'user/:userName', 
    component: PhotoListComponent,
    resolve:{
        photos: PhotoListRsolver
    }
    },
    { path: 'p/add', 
    component: PhotoFormComponent 
    },
    { path: '**', 
    component: NotFoundComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}