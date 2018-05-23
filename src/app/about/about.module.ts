import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROTAS: Routes = [
    {path: '', component: AboutComponent}
]
@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(ROTAS)]
})
export class AboutModule {}