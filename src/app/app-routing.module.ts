import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from "@angular/fire/auth-guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },

  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'edit-programs/:id',
    loadChildren: () => import('./edit-programs/edit-programs.module').then( m => m.EditProgramsPageModule)
  },
  {
    path: 'add-programs',
    loadChildren: () => import('./add-programs/add-programs.module').then( m => m.AddProgramsPageModule)
  },
  {
    path: 'list-programs',
    loadChildren: () => import('./list-programs/list-programs.module').then( m => m.ListProgramsPageModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'email-verify',
    loadChildren: () => import('./email-verify/email-verify.module').then( m => m.EmailVerifyPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
