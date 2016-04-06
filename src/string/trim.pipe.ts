import { Pipe, PipeTransform  } from 'angular2/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'trim'
})
export class TrimPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isString(input)) {
            return input;
        }
        
        return input.trim();
    }
}