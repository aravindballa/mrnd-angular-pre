import { Pipe } from "@angular/core";
import myGlobals = require('./globals');

@Pipe({
  name: "sort",
  pure: true
})
export class StudSortPipe {

  transform(array: Array<any>, args: String): Array<string> {
    console.log(args);
    console.log(myGlobals.changing);

    if(!args)
      return array;
    
    array.sort((a: any, b: any) => {

      var arger = {'Total score': 0, 'C-Basics':1, 'C-Arrays-Worksheet':2, 'C-Stings-Worksheet':3, 'C-LinkedLists-Worksheet':4,
                      'C-Arrays2-Worksheet':5, 'C-Stings2-Worksheet':6, 'C-LinkedLists2-Worksheet':7,
                      'C-15Puzzle':8, 'C-Recursion':9  
                  };
      return this.modifier(a,b,args[arger[myGlobals.changing]],myGlobals.changing);
    });

    
    return array;
  }

  modifier(a: any, b: any, args: string, changing: string): number {
    var order = args;
    if (!order) return 0;

    if (a[changing] < b[changing]) {
        return (order=='asc') ? -1 : 1;
         
      } else if (a[changing] > b[changing]) {
        return (order=='asc') ? 1 : -1;
      } else {
        return 0;
      }
  }
  
}