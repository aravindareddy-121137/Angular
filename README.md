Angular Pre-requisites
--------------------------------------------------------------------------

    HTML 5
    CSS 3
    Javascript (ES6)
    Bootstrap
    NodeJS

Angular Intro
---------------------------------------------------------------------------

    is a typescript based SPA framework.

    Single Page Application is a web application having only one html page and a lots of
    javascript code that executes on the cleint machine and can dynamically generate html content
    and replace the content of the page with the generated one as and when needed.

    SPA depend on asynchronous communication with web services for data related operations.

    SPA can be designed and developed using ReactJS, JQuery + AJAX, AngularJS, Angular, VueJS ...etc.,

    typescript = javascript + type safty.

Lab Setup
------------------------------------------------------------------------------------------

    NodeJS                                                      node --version
    VS Code
    Angular CLI     npm -g install @angular/cli@13.3.3          ng version

Why do we need NodeJS ?
------------------------------------------------------------------------------------------

    compile .ts into .js                babel
    mange packages (dependencies)       npm
    test our app                        jasmine and karma
    deploy on temporary dev server      Angular development server

    and all these are JS based tools to be executed on Developer Machine, and thats where we need NodeJS.

Angular CLI
-------------------------------------------------------------------------------------------

    is a command line interface that provideds a we commands to mange the angular project structure
    and project build operations.

    ng new proj-name

    proj-name>  ng build                    used to trigger compiler and all the compiled .js code 
                                            is placed in 'dist' folder.

    proj-name>  ng serve                    used to trigger compiler and all the compiled .js code 
                                            hosted on a dev server @ 4200 port

    proj-name>  ng serve --port 9999 -o     used to trigger compiler and all the compiled .js code 
                                            hosted on a dev server @ 9999 port
                                        
    proj-name>  ng test                     used to trigger all test cases.

    proj-name>  ng generate module ModuleName
    proj-name>  ng g module ModuleName
    proj-name>  ng g component ComponentName --skip-tests
    proj-name>  ng g directive DirectiveName --skip-tests
    proj-name>  ng g service ServiceName --skip-tests
    proj-name>  ng g pipe PipeName --skip-tests
    proj-name>  ng g interface InterfaceName
    proj-name>  ng g class ClassName --skip-tests

Angular Archetecture
---------------------------------------------------------------------------------------

    an angular application is amde up of typescript classes marked as various resources, each
    angular resource marked with a decorator to indicate its role. Each decorator is passed a JSON
    object that has the resource configuaration properties and is called meta-data.

        Modules

            an angular application is modularized where each module is a cohesive group of components, directives, pipes and
            services. Each angular application has one and only one top-level module called the 'Root Module'. This
            'Root Module' can furthur contain sub-modules called 'Feature Modules'. A 'Root Module' also can supply
            one or more 'top-level components' that are specified in its 'bootstrap' section.

            @NgModule({
                declarations:[ /* components, directive and pipes that belong to this module */ ],
                imports:[ /* feature module to be used in this module */],
                exports:[ /* components, directive and pipes that belong to this module and are accessable outside */],
                providers:[/* services that belong to this module */],
                bootstrap:[ /* top-level components */]
            })
            class SalesModule{

            }

            'bootstrap' section is only for 'root modules'
            'exports' section is absent for 'root modules'

        Component Directives/ Components

            Components / Component Directives are custom html elements.

            Component   =       state and behaviours    +    DOM        +       style

                                    component class     component template  component style
                                    component.ts        component.html      component.css

            @Component({
                selector:'tag-name',
                templateUrl:'',
                styleUrls:[]
            })
            class DashboardComponent{

            }

            Data Binding

                is to use the state and behaviour of component class inside the template.

                Interpolation

                    {{angular-expression}}

                Two Way Data Binding

                    is used to bind a field to a form element (input,select,textarea ..etc.,)

                    pass the value of the field in to the form-element initially
                    and when the form element is edited, the chagned value is passed back to the field.

                    'ngModel' is a attribute directive from 'FormsModule' used for two-way data binding
                    'FormsModule' is from '@angular/forms'

                    <input [(ngModel)]="field" />

                One Way Data Binding
                    Attribute Binding

                        <element [attribute]="angular-expression" > content </element>

                        <p title="this is a hint"> this is a apara </p>
                        <p [title]="x"> this is a apara </p>

                    Style Binding
                        
                        <element [style.cssProperty]="angular-expression" > content </element>

                    Css Class Binding

                        <element [class.CssClassName]="boolean-expression"> content </element>

                    Event Binding

                        to bind a method to an event so that the method is triggered
                        when the event occurs.

                        <element (event-directive)="method()"> content </element>

                        html event attributes           event-directives

                            onSubmit                        ngSubmit
                            onClick                         click
                            onDblClick                      dblclick
                            onMouseOver                     mouseover
                            onBlur                          blur
                            onChange                        change
                            onFocus                         focus
                            ......etc
        
        Strucutral Directives
        
            *ngIf
            *ngFor
            ngSwitch    *ngSwitchCase *ngDefault
            
        Attribute Directives

            Attributes Directives are custom html attributes.

            @Directive({
                selector:''
            })
            class FastMovingStockDirective{

            }

        Services
            @Injectable({
                providedIn:'root'
            })
            class SalesService{

            }
        
        Pipes
            @Pipe({
                name:''
            })
            class InWordsPipe{

            }

