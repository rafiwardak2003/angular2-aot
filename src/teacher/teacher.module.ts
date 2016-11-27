import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TeacherComponent } from './teacher.component';

@NgModule({
    bootstrap: [
        TeacherComponent
    ],
    declarations: [
        TeacherComponent
    ],
    imports: [
        SharedModule
    ]
})

export class TeacherModule {}