import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';


@Pipe({
    name: 'studfilter'
})
@Injectable()
export class StudFilterPipe implements PipeTransform {
    transform(items: any[], value: any[]): any[] {
        if (!items) return [];        
        return items.filter(function(item) {
            if(!value['name']) value['name'] = '';
            if(!value['college']) value['college'] = '';
            if(!value['score']) value['score'] = 0;
            return item.Name.includes(value['name']) 
                    && item.College.includes(value['college'])
                    && item['Total Score'] >= value['score'];
        });
    }
}