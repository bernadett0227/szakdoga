import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },

  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
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
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  ...canActivate(redirectLoggedInToChat)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: 'add-forums',
    loadChildren: () => import('./add-forums/add-forums.module').then( m => m.AddForumsPageModule)
  },
  {
    path: 'list-forums',
    loadChildren: () => import('./list-forums/list-forums.module').then( m => m.ListForumsPageModule)
  },
  {
    path: 'item-program/:id',
    loadChildren: () => import('./item-program/item-program.module').then( m => m.ItemProgramPageModule)
  },
  {
    path: 'add-news',
    loadChildren: () => import('./add-news/add-news.module').then( m => m.AddNewsPageModule)
  },
  {
    path: 'list-user',
    loadChildren: () => import('./list-user/list-user.module').then( m => m.ListUserPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'item-forum/:id',
    loadChildren: () => import('./item-forum/item-forum.module').then( m => m.ItemForumPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
