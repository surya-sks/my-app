import { CommonModule } from '@angular/common';
import { Component, NgModule, QueryList, viewChild, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule, CommonModule],
  templateUrl: './concepts.component.html',
  styleUrl: './concepts.component.css'
})
export class ConceptsComponent {
  accordion = viewChild.required(MatAccordion);
  // @ViewChildren(MatAccordion) accordion: QueryList<MatAccordion>;
  
  items: any = [
    {
      title: 'Angular Project Build and Deployment to Github',
      content: '1)create repository in git \
      \n2)copy code from github repository second page related to new repo and run it in gitBash(to map local project to github) \
      \n3)remove project name and just keep dist/ in angular.json-> outputPath(optional) \
      \n4)npm install -g angular-cli-ghpages(hope optional) \
      \n5)ng build --configuration production --base-href /<repository-name>/ \
        (to create build..it will create dist/ folder which is required to host in github/prod servers) \
        ng build --configuration production --output-path dist/browser --base-href /<repository-name>/ \
        (use --output-path if deploying in same branch...if deploying in gh branch no need to use...if it is used then gh pages not working) \
      \n6)comment /dist in .gitignore file \
        (if u want to host in same branch) \
        (to host in gh-pages branch this is not required)(optional)(if dist/ is not commented dist/ related files wont pushed to git) \
      \n7)ngh --dir dist/browser (or) ngh --dir dist/<project-name>/browser \
       (use <project-name> if it is not removed in angular.json-> outputPath) \
       (the above ngh cmd is optional if u want host in gh-pages branch) \
      \nNote : https://www.geeksforgeeks.org/deployment-of-angular-application-using-github-pages/  \
       (followed this website it suggested entire repo url for above step 5 instead, i used jut repo name...because while using repo url faced some issues) ',
       href: 'https://www.geeksforgeeks.org/deployment-of-angular-application-using-github-pages/'
    },
    {
      title: 'Angular',
      contents:[
         {
          title: 'CLI command for creating \'.ts\' file in angular 6',
          content: '*ng g c validation --flat=true --inline-style=true --inline-template=true --skip-tests \
                     \n-\'Flat\' true        - for create file without folder \
                     \n-\'inline-style\'     - for create or skip the css file \
                     \n-\'inline-template\'  - for create or skip the html file \
                     \n-\'skipTests\'        - for create or skip the testing file file'
         },
         {
          title: 'ViewEncapsulation',
          content: '*Emulated - By default, Angular uses emulated; This mode ensures that a component\'s styles do not leak out and affect other components. However, global styles defined outside of a component may still affect elements inside a component with emulated encapsulation. \
                   \n*ShadowDom - This mode strictly guarantees that only that component\'s styles apply to elements in the component\'s template. Global styles cannot affect elements in a shadow tree and styles inside the shadow tree cannot affect elements outside of that shadow tree. \
                   \n*None - This mode disables all style encapsulation for the component. Any styles associated with the component behave as global styles.',
          href: 'https://angular.dev/guide/components/styling'
         },
         {
          title: '::ng-deep',
          content: '*Applying this pseudo class to a CSS rule disables encapsulation for that rule, effectively turning it into a global style. \
                    \n*The Angular team strongly discourages new use of ::ng-deep.'
         },
         {
          title: 'Content projection with ng-content',
          content: '*You can use the <ng-content> element as a placeholder to mark where content should go: \
                    \n*When you use a component with <ng-content>, any children of the component host element are rendered, or projected, at the location of that <ng-content>: \
                    \n*You should not conditionally include <ng-content> with ngIf, ngFor, or ngSwitch. \
                    \n*If you include one or more <ng-content> placeholders with a select attribute and one <ng-content> placeholder without a select attribute, the latter captures all elements that did not match a select attribute: \
                    \n*ng-content uses select attribute: \
                    \n*in host element select attribute: is given in <tag> or using ngProjectAs',
          href: 'https://angular.dev/guide/components/content-projection'
         },
         {
          title: 'Component host elements',
          content: '*The DOM element that matches a component\'s selector is that component\'s host element. \r\n*The contents of a component\'s template are rendered inside its host element.',
          href: 'https://angular.dev/guide/components/host-elements'
         },
         {
          title: 'Component Lifecycle',
          content:'*constructor -> ngOnChanges -> ngOnInit -> ngDoCheck -> ngAfterViewInit/ngAfterContentInit -> ngAfterViewChecked/ngAfterContentChecked -> afterNextRender/afterRender -> ngOnDestroy/DestroyRef \
                  \n*During initialization, the first ngOnChanges runs before ngOnInit.  \
                  \n*During initialization, the first ngDoCheck runs after ngOnInit.',
          href: 'https://angular.dev/guide/components/lifecycle'
         },
         {
          title:'Using DOM APIs',
          content:'*Angular handles most DOM creation, updates, and removals for you. Components can inject ElementRef to get a reference to the component\'s host element: \
                  \n*The nativeElement property references the host Element instance. \
                  \n*afterRender and afterNextRender must be called in an injection context, typically a component\'s constructor. \
                  \n*Used for Managing element focus; Reading an element\'s text content, etc.,',
          href:'https://angular.dev/guide/components/dom-apis'
         },
         {
          title: 'ViewContainerRef vs ViewChild vs ViewChildren',
          content: '*ViewContainerRef is a reference to a container where views (or components) can be dynamically added, removed, or manipulated. \
                  \n*ViewChild is a decorator used to get a reference to a specific DOM element or Angular component within the template of a component. \
                  \n*ViewChild is used to get a reference to a single child component, directive, or DOM element. \
                  \n*ViewChildren is used to get references to multiple child components, directives, or DOM elements that match a specified selector.'
         },
         {
          title: 'NgComponentOutlet',
          content: '*NgComponentOutlet is a structural directive that dynamically renders a given component in a template.',
          href: 'https://angular.dev/guide/components/programmatic-rendering'
         },
         {
          title: 'Lazy-loading components',
          content: '*You can use both of the approaches described above, NgComponentOutlet and ViewContainerRef, to render components that are lazy-loaded with a standard JavaScript dynamic import.',
          href: 'https://angular.dev/guide/components/programmatic-rendering'
         },
         {
          title: 'Advanced component configuration',
          content: '',
          href: 'https://angular.dev/guide/components/advanced-configuration'
         },
         {
          title:'Custom elements',
          content: '*The createCustomElement() function converts a component into a class that can be registered with the browser as a custom element. After you register your configured class with the browser\'s custom-element registry, use the new element just like a built-in HTML element in content that you add directly into the DOM: \
                   \n*Angular provides the createCustomElement() function for converting an Angular component, together with its dependencies, to a custom element.',
          href: 'https://angular.dev/guide/elements'
         },
         {
          title: 'Internationalization',
          content: '*ng add @angular/localize'
         }
      ]
    },
    {
      title: 'RxJS',
      contents:[
        {
          title:'RxJS Live Timer',
          href: 'https://stackblitz.com/edit/angular-fpqxrj?file=src%2Fapp%2Fapp.component.ts'
         },
         {
          title:'RxJS Timer',
          href: 'https://stackblitz.com/edit/angular-bydxxk?file=src%2Fmain.ts'
         },
         {
          title: 'RxJS CountDown Timer',
          href: 'https://stackblitz.com/edit/countdown-timer-angular-v2-tdd7eb?file=src%2Fapp%2Fapp.component.html'
         }
      ]
    },
    {
      title: 'JS',
      contents:[
        //  {
        //   title: 'js Test',
        //   content: 'js TEST'
        //  }
      ]
    },
    {
      title: 'CSS',
      contents:[
        //  {
        //   title: 'css Test',
        //   content: 'css TEST'
        //  }
      ]
    },
    {
      title: 'HTML',
      contents:[
         {
          title: 'DOM, or Document Object Model',
          content: 'It defines how to access, manipulate, and modify document elements using scripting languages like JavaScript. So basically Document Object Model is an API that represents and interacts with HTML or XML documents. Ex: getElementById(), etc.,'
         },
         {
          title: 'Attributes',
          content: 'Attributes provide additional information about elements. Attributes are always specified in the start tag. Ex: href, src, title, style, etc.,'
         },
         {
          title: 'Property & Method',
          content: 'HTML DOM properties are values (of HTML Elements) that you can set or change. A method is an action you can do (like add or deleting an HTML element). Ex: document.getElementById("demo").innerHTML = "Hello World!". In the example above, getElementById is a method, while innerHTML is a property.'
         }
      ]
    },
    {
      title: 'SQL',
      contents:[
        {
          title: 'Remote connection to MySQL',
          content: '',
          href: 'https://stackoverflow.com/questions/69824631/mysql-workbench-ssl-connection-error-ssl-is-required-but-the-server-doesnt-sup'
        },
         {
          title: 'How to Add Prefix in Auto Increment in MySQL? Solution 1',
          content: '',
          href: 'https://stackoverflow.com/questions/17893988/how-to-make-mysql-table-primary-key-auto-increment-with-some-prefix'
         },
         {
          title: 'How to Add Prefix in Auto Increment in MySQL? Solution 2',
          content: '',
          href: 'https://dba.stackexchange.com/questions/322618/how-to-create-an-auto-increment-column-with-a-prefix-in-adminer-with-mysql'
         },
         {
          title: 'How to Add Prefix in Auto Increment in MySQL? Solution 3',
          content: '',
          href: 'https://www.geeksforgeeks.org/how-to-add-prefix-in-auto-increment-in-mysql/'
         }
      ]
    },
    {
      title: 'GIT Command',
      contents:[
        {
          title: 'Remove the .git directory:',
          content: 'rm -rf .git',
          href: ''
        },
      ]
    }
  ];

}



// INSERT INTO items_vegetable_list (veg_name) 
// VALUES
// ('Tomato'),('Big Onion'),('Small Onion'),('Ginger'),('Garlic'),('Potato'),
// ('Brinjal'),('Lady\'s Finger'),('Carrot'),('Beetroot'),('Radish'),('Green Chilli'),
// ('Green Peas'),('Beans Green'),('Beans Light Green'),('Ridge Gourd'),('BitterGourd'),
// ('Bottle Gourd Round'),
// ('Bottle Gourd Long'),('Cauliflower'),('Cabbage'),('Pumkin'),('Mushroom'),('Corn Packaged'),
// ('Corn Unpackaged'),('Capsicum'),('Cucumber'),('Curry Leaves'),('Coriander Leaves'),
// ('Mint Leaves'),('Coconut')




// INSERT INTO items_fruit_list (fru_name) 
// VALUES
// ('Apple'),('Orange'),('Mosambi'),('Banana Eelaki'),('Banana Thaen'),('Banana Red'),
// ('Grapes Black'),('Grapes Green'),('Mango'),('pomegranate'),('Lemon'),('Custard Apple'),('Pineapple'),('Watermelon'),
// ('Papaya')