import { Component, ViewEncapsulation, ViewChild, Compiler, ViewContainerRef } from '@angular/core';

interface SystemImport {
    import: any;
}

// Temp System type
declare var System: SystemImport;

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template:
        `<div>This is the app component.
            <template #teacherContainer></template>
        </div>`
})
export class AppComponent {
    @ViewChild('teacherContainer', { read: ViewContainerRef }) teacherContainer: ViewContainerRef;

    constructor(public compiler: Compiler) {
        this.loadTeacherModule();
    }

    // This method demonstrates how to fetch a module async
    // A similar approach can be used when using routes
    private loadTeacherModule(): Promise<any>  {
        return new Promise((resolve) => {
            System.import('./teacher/teacher.module')
                .then((modules) => modules.TeacherModule)
                .then((teacherModule) => {
                    return this.compiler.compileModuleAndAllComponentsAsync(teacherModule);
                }).then((moduleWithFactories) => {

                const factory = moduleWithFactories.componentFactories.find(x => x.selector === 'teacher');
                const component = this.teacherContainer.createComponent(factory).instance;

                resolve();
            });
        });
    }
}