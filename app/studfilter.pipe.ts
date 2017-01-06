import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';


@Pipe({
    name: 'studfilter'
})
@Injectable()
export class StudFilterPipe implements PipeTransform {
    transform(items: any[], value: any[]): any[] {
        console.log('Filtering...');
        
        if (!items) return [];        
        return items.filter(function(item) {
            value['name'] = value['name'] || '';
            value['college'] = value['college'] || '';
            value['score'] = value['score'] || 0;
            return item.Name.includes(value['name']) 
                    && item.College.includes(value['college'])
                    && item['Total Score'] >= value['score'];
        });
    }
}