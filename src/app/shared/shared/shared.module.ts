import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from 'src/app/search/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';



@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule, FormsModule, CustomMaterialModule
  ],
  exports: [SearchFormComponent],
})
export class SharedModule { }
