import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { AppsComponent } from "./apps/apps.component";
import { ResumeComponent } from "./resume/resume.component";
import { BlogComponent } from "./blog/blog.component";



const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'apps', component: AppsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'blog', component: BlogComponent },

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);