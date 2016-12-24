import { Pipe } from "@angular/core";

@Pipe({
  name: "sort"
})
export class StudSortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    if(!args)
      return array;
    array.sort((a: any, b: any) => {
      if (a['Total Score'] < b['Total Score']) {
        return (args=='asc') ? -1 : 1;
         
      } else if (a['Total Score'] > b['Total Score']) {
        return (args=='asc') ? 1 : -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}