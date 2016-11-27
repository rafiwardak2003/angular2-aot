import { Component, ViewEncapsulation } from '@angular/core';

import { Subjects } from './Subjects';

@Component({
    selector: 'teacher',
    encapsulation: ViewEncapsulation.None,
    template:
        `<div>This is the teacher component.
            <ul *ngFor="let subject of subjects">
                <li>{{subject}}</li>
            </ul>
        </div>`
})
export class TeacherComponent {
    subjects: Array<string> = Subjects;
}