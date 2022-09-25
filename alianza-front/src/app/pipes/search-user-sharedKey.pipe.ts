import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchUserSharedKey'
})

export class SearchUserSharedKey implements PipeTransform {
    transform(value: any[], search: string): any {

        if (search === '' || search === undefined) {
            return value;
        }
        return value.filter(user => user.sharedKey?.toLowerCase().indexOf(search) != -1)

    }
}