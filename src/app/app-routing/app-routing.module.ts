import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes}    from '@angular/router';
import { GemComponent } from '../gem/gem.component';
import { GemsComponent } from '../gems/gems.component';

const appRoutes: Routes = [
	{
		path:'',
		component: GemsComponent
	},
	{
		path:'gem/:id',
		component: GemComponent
	},
	{
		path:'gems',
		component: GemsComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forRoot(appRoutes,{enableTracing:true})  
  ],
  declarations: [RouterModule]
})
export class AppRoutingModule { }
