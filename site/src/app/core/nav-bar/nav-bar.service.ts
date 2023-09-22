import {Injectable} from "@angular/core"
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NavBarService {
    showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

}